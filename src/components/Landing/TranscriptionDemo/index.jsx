import React, { useState, useEffect } from 'react';
import { wordIterator } from './TextGenerator';

const TranscriptionDemo = () => {
  let captions = {
    text: '',
    addText: function (newText) {
      this.text += newText + ' ';
    },
    resetText: function () {
      this.text = '';
    },
  };

  const [text, setText] = useState(captions.text);

  useEffect(() => {

    // Basically using setInterval to print out the next word
    // with 300ms delay in between.
    let print = setInterval(() => {
      const data = wordIterator.next();

      if (data.done !== true) {
        captions.addText(data.word);
        setText(text + captions.text);
      } else {

        // Delete the text that's already there and reset the iterator.
        captions.resetText();
        wordIterator.reset();
        setText('');
      }
    }, 300);

    // Cleanup.
    return () => clearInterval(print);

  });

  return (
      <p id="transcription-text">{text}</p>
  );
};

export default TranscriptionDemo;
