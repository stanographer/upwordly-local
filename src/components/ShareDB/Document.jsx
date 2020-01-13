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
  render() {
    return <div>hello, this is the document</div>;
  }
}

export default Document;
