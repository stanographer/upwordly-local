import React, { Component } from 'react';
import { attachTextarea } from '../../ShareDB/textarea';
import dynamic from 'next/dynamic';


class EditorComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.doc = props.doc;
  }

  attachDocument = () => {
    this.doc.subscribe(err => {
      if (err) {
        this.setState({text: 'There was an error.'});
      }

      attachTextarea(this.sharedTextarea, this.doc);

    }, []);

  };

  componentDidMount() {


    this.attachDocument();

  };

  componentWillUnmount() {
    this.doc.unsubscribe();
    this.doc.destroy();
    this.binding = null;
  }

  render() {

    return (
        <>
        <textarea
            autoFocus={true}
            spellCheck={false}
            className="bg-bg h-full text-2xl px-4 py-4 input"
            ref={ref => (this.sharedTextarea = ref)}
        />
        </>
    );
  }
}

export default EditorComponent;
