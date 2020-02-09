import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Binding from './ReactBinding';
import { FetchingToast, LoadedToast } from '../Toasts';
import Provider from '../../../src/components/Session/Provider';
import WidgetContext from '../../../src/providers/WidgetContext';
import { animateScroll as scroll } from 'react-scroll';

const style = {
  whiteSpace: 'pre-wrap',
  fontSize: '4rem',
};

class Document extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolling: true,
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

      this.startScrolling();

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
    this.stopScrolling();
  }

  startScrolling = () => {
    // Set the scrolling state to scrolling.
    this.setState({ scrolling: true });

    // Begin auto-scrolling.
    this.interval = setInterval(() => {
      scroll.scrollToBottom({
        delay: 0,
        duration: 100,
        offset: 30,
        isDynamic: true,
        smooth: true,
      });
    }, 500);
  };

  stopScrolling = () => {
    // Stop auto-scrolling.
    this.setState({ scrolling: false });
    clearInterval(this.interval);
  };

  render() {
    const { text } = this.state;

    return (
      <div style={style}>
        {text || ''}
      </div>
    );
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
