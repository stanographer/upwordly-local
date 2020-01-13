import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Binding from './ReactBinding';
import { FetchingToast, LoadedToast } from '../Toasts';

// function Document(props) {
//   const { doc, flag } = props;
//   const [text, setText] = useState('');
//   let binding;
//
//   useEffect(() => {
//
//     FetchingToast();
//
//     doc.subscribe(err => {
//       if (err) {
//         setText(`There was a connection error: ${err}`);
//       }
//     });
//
//     // Load document and bind it to local snapshot.
//     doc.on('load', () => {
//       binding = new Binding(doc.data, flag);
//       console.log(binding);
//
//       setTimeout(() => {
//         setText(binding.snapshot || 'Connection successful.');
//         LoadedToast();
//       }, 0);
//     });
//
//     // Destroy listeners.
//     return () => {
//       doc.unsubscribe();
//       doc.destroy();
//       binding = null;
//     };
//   }, []);
//
//   // Apply remote ops to local snapshot.
//   doc.on('op', op => {
//     setTimeout(() => {
//       setText(binding.applyOp(op));
//     }, 0);
//   });
//
//   return <section className="transcript">{text || ''}</section>;
// }

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
    });

    // Load document and bind it to local snapshot.
    doc.on('load', () => {
      this.binding = new Binding(doc.data, flag);
      console.log('binding:', this.binding);

      this.setState({
        text: this.binding.snapshot || 'Connection successful.',
      });
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

export default Document;
