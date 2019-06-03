import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import LiveTranscript from '../../components/LiveTranscript';
import { animateScroll as scroll } from 'react-scroll';
import 'react-intersection-visible';

// Components
import ScrollArrow from '../../components/Button';
import TextArea from '../../components/LiveTranscript/TextArea';

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolling: true,
    };

  }

  componentDidMount() {
    // On component load, begin auto-scrolling.
    this.setScrolling();
    const {router} = this.props;

    console.log(router.query);

  }

  setScrolling = () => {
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

  render() {
    const {scrolling} = this.state;
    const {router} = this.props;

    return (
        <Fragment>
          <Layout>
            <div className="px-8
              py-8
              text-5xl"
                 onTouchStart={() => {
                   this.setState({
                     scrolling: false
                   });
                   clearInterval(this.interval);
                 }}>
              <LiveTranscript
                  user={router.query.user}
                  job={router.query.job}
                  render={(state) => (
                      <TextArea {...state} />
                  )}
              />
            </div>
            {!scrolling
                ? <ScrollArrow
                    aria-label="Scroll to Bottom"
                    click={() => {
                      this.setScrolling();
                    }}
                    filter="scroll-top-a"
                    href="scroll-top-b"
                    id="scroll-top-b"
                    path="M18 22l8 8 8-8"
                    title="Scroll to Bottom" />
                : null
            }
          </Layout>
        </Fragment>
    );
  }
}

export default withRouter(View);