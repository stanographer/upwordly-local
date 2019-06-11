import React from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';
import 'react-intersection-visible';

// Components.
import TextArea from '../../components/LiveTranscript/TextArea';
import LiveTranscript from '../../components/LiveTranscript';
import Layout from '../../components/Layout';

// Dynamic imports.
const ScrollButton = dynamic(() => import('../../components/Controls')
    .then(el => el.ScrollButton));
const Nav = dynamic(() => import('../../components/Controls')
    .then(el => el.Nav));

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
        <Layout>
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
        </Layout>
    );
  }
}

export default withRouter(View);