import React, { useState, useEffect } from 'react';
import Binding from './ReactBinding';
import {
  FetchingToast,
  LoadedToast,
} from '../Toasts';
import PropTypes from 'prop-types';

function Document(props) {
  const {doc, flag} = props;
  
  let [text, setText] = useState('');
  let binding;

  useEffect(() => {
    FetchingToast();
    doc.subscribe(err => {
      if (err) {
        setText('There was a connection error: ' + err);
      }
    }, []);

    // Load document and bind it to local snapshot.
    doc.on('load', () => {
      binding = new Binding(doc.data, flag);

      setTimeout(() => {
        setText(binding.snapshot || 'Connection successful.');
        LoadedToast();
      }, 0);
    });

    // Apply remote ops to local snapshot.
    doc.on('op', op => {
      setTimeout(() => {
        setText(binding.applyOp(op));
      }, 0);
    });

    // Destroy listeners.
    return () => {
      doc.unsubscribe();
      doc.destroy();
      binding = null;
    };
  }, []);

  return (
      <section className="transcript">
        {text || ''}
      </section>
  );
}

Document.propTypes = {
  doc: PropTypes.object,
  flag: PropTypes.string,
};

export default Document;