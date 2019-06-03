import React, { useState, useEffect } from 'react';
import Binding from './react-binding';
import PropTypes from 'prop-types';

function TextArea(props) {
  const {
    doc,
    flag
  } = props;

  let [text, setText] = useState('');
  let binding;

  useEffect(() => {
    console.log('doc in textarea', props.doc);
    doc.subscribe(err => {
      if (err) {
        setText('There was a connection error: ' + err);
      }
    }, []);

    // Load document and bind it to local snapshot.
    doc.on('load', () => {
      binding = new Binding(doc.data, flag);
      setText(binding.snapshot);
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
      <div className="transcript">
        {text || 'Loading...'}
      </div>
  );
}

TextArea.propTypes = {
  doc: PropTypes.object,
  flag: PropTypes.string,
};

export default TextArea;