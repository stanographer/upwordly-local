import React, { useState, useEffect } from 'react';
import Binding from './ReactBinding';
import { FetchingToast, LoadedToast } from '../Toasts';
import PropTypes from 'prop-types';

const Document = props => {
  const { doc, flag } = props;
  const [text, setText] = useState('');

  useEffect(() => {
    let binding;

    FetchingToast();

    doc.subscribe(err => {
      if (err) {
        return setText(`There was a connection error: ${err}`);
      }

      return setTimeout(() => {
        setText(binding.snapshot || 'Connection successful.');
      }, 0);
    }, []);

    // Load document and bind it to local snapshot.
    doc.on('load', () => {
      binding = new Binding(doc.data, flag);
      LoadedToast();
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
  }, [doc, flag]);

  return <section className="transcript">{text || ''}</section>;
};

Document.propTypes = {
  doc: PropTypes.object,
  flag: PropTypes.string,
};

export default Document;
