import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll/modules';

// Components.
import Document from '../../src/components/ShareDB/Document';
import ConnectionProvider from '../../src/components/ShareDB/ConnectionProvider';
import Provider from '../../src/components/Session/Provider';
import WidgetContext from '../../src/providers/WidgetContext';
import { DisconnectedToast, ReconnectedToast } from '../../src/components/Toasts';

// Dynamic imports.
const ScrollButton = dynamic(() => import('../../src/components/General')
    .then(mod => mod.ScrollButton));
const Nav = dynamic(() => import('../../src/components/Nav/Nav'));
const Modal = dynamic(() => import('react-modal'));
const ModalComponent = dynamic(() => import('../../src/components/Modals/ModalComponent'));

const modalStyles = {
  content: {
    backgroundColor: '#282c34',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08)',
  },
  overlay: {
    backgroundColor: 'rgb(0, 0, 0, 0.3)',
  }
};

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolling: true,
      modalOpen: false,
    };
  }

  interval = 0;

  componentDidMount() {

    // On component load, begin auto-scrolling.
    this.startScrolling();
  }

  componentWillUnmount() {
    this.stopScrolling();
  }

  startScrolling = () => {

    // Set the scrolling state to scrolling.
    this.setState({scrolling: true});

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
    this.setState({scrolling: false});
    clearInterval(this.interval);
  };

  openModal = () => {
    this.setState({modalOpen: true});
  };

  closeModal = () => {
    this.setState({modalOpen: false});
  };

  render() {
    const {scrolling} = this.state;
    const {router} = this.props;

    return (
        <Provider>
          <WidgetContext.Consumer>
            {context => (
                <Fragment>
                  <Modal
                      isOpen={context.widgetOpen}
                      onRequestClose={context.closeWidget}
                      contentLabel="Widget Modal"
                      style={modalStyles}
                      ariaHideApp={false}
                  >
                    <ModalComponent
                        user={router.query.user}
                        job={router.query.job}
                        title={context.currentWidget}
                    />
                  </Modal>
                  <div className={!scrolling ? 'visible sticky' : 'invisible sticky'}>
                    <Nav
                        openModal={this.openModal}
                        closeModal={this.closeModal}
                    />
                  </div>
                  {/*px-8 py-8 text-2xl md:text-5xl*/}
                  <div style={{
                    ...context.settings,
                    fontSize: (context.settings.fontSize / 10) + 'rem',
                    padding: context.settings.paddingY + 'rem' + ' ' + context.settings.paddingX + 'rem',
                  }}
                       onTouchStart={() => this.stopScrolling()}
                       onClick={() => this.stopScrolling()}>
                    <ConnectionProvider
                        onDisconnect={DisconnectedToast}
                        onReconnect={ReconnectedToast}
                        user={router.query.user}
                        job={router.query.job}
                        render={state => (
                            <Document
                                editable={false}
                                {...state}
                            />
                        )}
                    />
                  </div>
                  <ScrollButton
                      aria-label="Scroll to Bottom"
                      click={() => {
                        this.startScrolling();
                      }}
                      filter="scroll-top-a"
                      href="scroll-top-b"
                      id="scroll-top-b"
                      path="M18 22l8 8 8-8"
                      scrolling={scrolling}
                      title="Scroll to Bottom" />
                </Fragment>
            )}
          </WidgetContext.Consumer>
        </Provider>
    );
  }
}

export default withRouter(View);