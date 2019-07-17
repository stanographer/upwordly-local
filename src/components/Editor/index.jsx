import React, { Component } from 'react';
import { attachTextarea } from '../ShareDB/TextAreaBinding';
import otText from 'ot-text';

class EditorComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.doc = props.doc;
    this.state = {
      docAttached: false,
    };
  }

  attachDocument = () => {
    this.doc.subscribe(err => {
      if (err) {
        this.setState({
          docAttached: false,
          text: 'There was an error.',
        });
      }

      if (!this.doc.type) {
        this.doc.create(
            '',
            otText.type.name,
            true,
            () => {
              attachTextarea(this.sharedTextarea, this.doc);
              this.setState({docAttached: true});
            }
        );
      }
      attachTextarea(this.sharedTextarea, this.doc);
      this.setState({docAttached: true});
    });
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
    const {docAttached} = this.state;

    return (
        <div className="h-screen">
          <div className={
            docAttached
                ? 'w-full py-1 bg-green-300 sticky'
                : 'w-full py-1 bg-yellow-300 sticky'
          } />
          <div className="flex mb-4 h-full">
            <div className="w-1/2 bg-gray-400 h-full">
             <textarea
                 disabled={!docAttached}
                 autoFocus={true}
                 spellCheck={false}
                 className="bg-bg h-full text-2xl px-4 py-4 input"
                 ref={ref => (this.sharedTextarea = ref)}
             />
            </div>
            <div className="w-1/2 bg-bg h-full border text-left">
              <p>Blah</p>
            </div>
          </div>
        </div>
    );
  }
}

export default EditorComponent;
