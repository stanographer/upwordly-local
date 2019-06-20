import React from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';
import 'react-intersection-visible';

// Components.
import TextArea from '../../components/LiveTranscript/TextArea';
import LiveTranscript from '../../components/LiveTranscript';
import Provider from '../../components/Provider';
import WidgetContext from '../../context/widget-context';


// Dynamic imports.
const ScrollButton = dynamic(() => import('../../components/Controls')
    .then(el => el.ScrollButton));
const Nav = dynamic(() => import('../../components/Controls')
    .then(el => el.Nav));
const Modal = dynamic(() => import('react-modal'));
const ModalComponent = dynamic(() => import('../../components/Controls')
    .then(el => el.Modal));


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
    const {router} = this.props;
    this.startScrolling();

    console.log(router.query);

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
                <>
                  <Modal
                    isOpen={context.widgetOpen}
                    onRequestClose={context.closeWidget}
                    contentLabel="Example Modal"
                    style={modalStyles}
                    ariaHideApp={false}
                >
                  <ModalComponent title={context.currentWidget} />
                </Modal>
                  <div className={!scrolling ? 'visible sticky' : 'invisible sticky'}>
                    <Nav openModal={this.openModal} closeModal={this.closeModal} />
                  </div>
                  <div className="
              px-8
              py-8
              text-2xl
              md:text-5xl"
                       onTouchStart={() => this.stopScrolling()}
                       onClick={() => this.stopScrolling()}>
                    <LiveTranscript
                        user={router.query.user}
                        job={router.query.job}
                        render={(state) => (
                            <TextArea {...state} />
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
                </>
            )}
          </WidgetContext.Consumer>
        </Provider>
    );
  }
}

export default withRouter(View);