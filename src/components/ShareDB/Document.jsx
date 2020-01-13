import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Binding from './ReactBinding';
import { FetchingToast, LoadedToast } from '../Toasts';

class Document extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.binding = {};
  }

  componentDidMount() {
    const { doc, flag } = this.props;
    const { text } = this.state;

    doc.subscribe(err => {
      if (err) {
        this.setState({
          text: `There was a connection error: ${err}`,
        });
      }

      FetchingToast();
    });

    // Load document and bind it to local snapshot.
    doc.on('load', () => {
      this.binding = new Binding(doc.data, flag);
      console.log('binding:', this.binding);

      this.setState({
        text: this.binding.snapshot || 'Connection successful.',
      });

      LoadedToast();
    });

    // Apply remote ops to local snapshot.
    doc.on('op', op => {
      setTimeout(() => {
        this.setState({
          text: this.binding.applyOp(op),
        });
      }, 0);
    });
  }

  componentWillUnmount() {
    const { doc } = this.props;

    doc.unsubscribe();
    doc.destroy();
    this.binding = null;
  }

  render() {
    const { text } = this.state;

    console.log('state', this.state);
    return <div>{text || ''}</div>;
  }
}

Document.propTypes = {
  doc: PropTypes.oneOf(['Doc']),
  flag: PropTypes.string,
};

Document.defaultProps = {
  doc: PropTypes.oneOf(['Doc']),
  flag: PropTypes.string,
};

export default Document;
