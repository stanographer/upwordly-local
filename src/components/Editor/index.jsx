import React, { Component, Fragment } from 'react';
import { attachTextarea } from '../ShareDB/TextAreaBinding';
import otText from 'ot-text';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignJustify,
  faClipboard,
  faDownload,
  faExpand,
  faFont,
  faPaperPlane,
  faTint,
} from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ToolbarButton from './ToolbarButton';

class EditorComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      copied: false,
      docAttached: false,
      expanded: false,
      lastOp: '',
      lastIndex: 0,
    };

    this.doc = props.doc;
  }

  attachDocument = () => {
    if (!this.doc.type) {
      this.doc.create('', otText.type.name, true, () => {
        this.binding = attachTextarea(this.sharedTextarea, this.doc);
        this.setState({docAttached: true});
      });
    }
  };

  copiedUrl = () => {
    this.setState({copied: true});
    setTimeout(() => this.setState({copied: false}), 3000);
  };

  displayOp = op => {
    let message = '';
    let index = 0;

    if (typeof op[0] === 'number' && typeof op[1] === 'string') {
      index = op[0];
      message =
          op[1] === '\n' ? '*new line*' : op[1] === '\t' ? '*tab*' : op[1];
    } else if (typeof op[0] === 'string') {
      message = op[0] === '\n' ? 'new line' : op[0] === '\t' ? '*tab*' : op[0];
    } else if (op[1] && op[1].d) {
      index = op[0];
      message = `${op[1].d} characters deleted at ${index}`;
    } else {
      index = 0;
      message = `${op[0].d} characters deleted`;
    }

    return setTimeout(
        () =>
            this.setState({
              lastOp: message,
              lastIndex: index,
            }),
        0,
    );
  };

  generateUrl = () => {
    const {currentJob} = this.props;

    return currentJob && Object.keys(currentJob).length > 0
        ? `${document.location.protocol}//${document.location.host}/view/${currentJob.username}/${currentJob.shortName}`
        : '';
  };

  componentDidMount() {
    const {connection} = this.props;
    this.attachDocument();
    // attachTextarea(this.sharedTextarea, this.doc);

    // this.binding = new TextAreaBinding(this.sharedTextarea, this.doc);
    // this.binding.bind();

    connection.socket.onclose = () => {
      this.setState({docAttached: false});
    };

    connection.socket.onopen = () => {
      this.setState({docAttached: true});
    };
  }

  componentWillUnmount() {
    this.doc.unsubscribe();
    this.doc.destroy();
    this.binding = null;
  }

  render() {
    const {copied, docAttached, lastIndex, lastOp} = this.state;
    const {currentJob, expandEditor, toggleExpand} = this.props;

    return (
        <Fragment>
          <div hidden={expandEditor}>
            <p className="font-apercu text-5xl">Live Editor</p>
            <Typed
                className="marquee text-teal-200"
                strings={[
                  'When the bar turns green, you are connected &amp; ready to write live.',
                ]}
                typeSpeed={20}
            />
            {currentJob ? (
                <p className="pt-4 pb-1 text-green-200">{`"${currentJob.title ||
                currentJob.shortName}"`}</p>
            ) : (
                ''
            )}
            {currentJob && currentJob.speakers ? (
                <p className="pt-4 pb-2 text-red-200">{`${currentJob.speakers}`}</p>
            ) : (
                ''
            )}
            <section className="mt-6">
              <CopyToClipboard
                  text={this.generateUrl()}
                  onCopy={() => this.copiedUrl()}
              >
                <div
                    className={
                      copied
                          ? 'flex-wrap px-2 py-2 md:flex justify-between border cursor-pointer bg-green-200 text-bg2'
                          : 'flex-wrap px-2 py-2 md:flex justify-between border cursor-pointer'
                    }
                >
                  <p
                      className={
                        copied
                            ? 'underline px-2 py-2 md:py-2 md:px-4 my-0 bg-green-200 text-bg2 font-mono break-words cursor-pointer'
                            : 'underline px-2 py-2 md:py-2 md:px-4 my-0 text-teal-200 font-mono break-words cursor-pointer'
                      }
                  >
                    <FontAwesomeIcon className="mx-4" icon={faClipboard} />
                    {this.generateUrl()}
                  </p>
                  <p
                      className={
                        copied
                            ? 'px-2 py-2 md:py-2 md:px-4 my-0 font-mono text-bg inline-block'
                            : 'px-2 py-2 md:py-2 md: px-4 my-0 font-mono text-teal-200 inline-block'
                      }
                  >
                    {copied ? 'Copied to clipboard!' : 'Click to copy URL'}
                  </p>
                </div>
              </CopyToClipboard>
            </section>
          </div>
          <main
              className={
                expandEditor
                    ? 'flex flex-grow'
                    : 'flex flex-wrap flex-row mx-auto my-4 lg:my-6 md:flex-no-wrap'
              }
          >
            <section
                className={
                  expandEditor
                      ? 'w-full h-full'
                      : 'w-full h-auto mb-6 my-4 lg:mb-0 lg:my-0 flex flex-col'
                }
            >
              <div className="flex-grow flex flex-col bg-bg2 border rounded shadow overflow-hidden">
                <div className="border-b">
                  <div className="flex justify-center px-6 -mb-px">
                    <ToolbarButton
                        title="Font"
                        icon={<FontAwesomeIcon icon={faFont} />}
                        onClick={() => console.log('click!')}
                    />
                    <ToolbarButton
                        title="Line Height"
                        icon={<FontAwesomeIcon icon={faAlignJustify} />}
                        onClick={() => console.log('click!')}
                    />
                    <ToolbarButton
                        title="Colors"
                        icon={<FontAwesomeIcon icon={faTint} />}
                        onClick={() => console.log('click!')}
                    />
                    <ToolbarButton
                        title="Download"
                        icon={<FontAwesomeIcon icon={faDownload} />}
                        onClick={() => console.log('click!')}
                    />
                    <ToolbarButton
                        title="Email"
                        icon={<FontAwesomeIcon icon={faPaperPlane} />}
                        onClick={() => console.log('click!')}
                    />
                    <ToolbarButton
                        title="Expand"
                        icon={<FontAwesomeIcon icon={faExpand} />}
                        onClick={() => toggleExpand()}
                    />
                  </div>
                </div>
                <div
                    className={
                      docAttached
                          ? 'w-full py-1 bg-green-300'
                          : 'w-full py-1 bg-yellow-300'
                    }
                />
                <textarea
                    style={{
                      height: expandEditor ? '100vh' : '23rem',
                    }}
                    disabled={!docAttached}
                    autoFocus={true}
                    spellCheck={false}
                    className={
                      docAttached
                          ? 'bg-bg h-full text-2xl px-4 py-4 input font-mono'
                          : 'bg-gray-800 h-full text-2xl px-4 py-4 input font-mono'
                    }
                    ref={ref => (this.sharedTextarea = ref)}
                />
                {expandEditor ? (
                    ''
                ) : (
                    <div className="flex justify-between px-6 py-4 border-t">
                      <p className="font-mono text-teal-200">
                        {docAttached
                            ? lastOp
                                ? `"${lastOp}"`
                                : 'Ready'
                            : 'Connecting the parts...'}
                      </p>
                      <p className="font-mono text-red-200">
                        {lastIndex ? lastIndex : '0'}
                      </p>
                    </div>
                )}
              </div>
            </section>
          </main>
        </Fragment>
    );
  }
}

export default EditorComponent;
