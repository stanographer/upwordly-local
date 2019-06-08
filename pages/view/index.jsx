import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';
import 'react-intersection-visible';

// Components.
import { ButtonGroup, Nav } from '../../components/Controls';
import TextArea from '../../components/LiveTranscript/TextArea';
import LiveTranscript from '../../components/LiveTranscript';
import ScrollArrow from '../../components/Button';
import Layout from '../../components/Layout';

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolling: true,
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
    console.log(this.interval);
  };

  render() {
    const {scrolling} = this.state;
    const {router} = this.props;

    return (
        <Fragment>
          <div className={!scrolling ? 'visible sticky' : 'invisible sticky'}>
            <Nav />
          </div>
          <div className="px-8
              py-8
              text-5xl"
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
          <ScrollArrow
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
    );
  }
}

export default withRouter(View);