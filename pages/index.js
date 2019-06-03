import Layout from '../components/Layout';
import React from 'react';
import Typed from 'react-typed';
import Link from 'next/link';

const Index = props => (
    <Layout>
      <div
          className="landing-wrapper"
          id="landing-wrapper">
        <section className="intro">
          <div
              className="content
              inline-block
              align-middle">
            <h1 className="text-5xl landing-title">UPWORDLY</h1>
            <p>
              <Typed
                  className="marquee"
                  strings={[
                    'One platform to sync, send, and integrate your real-time transcriptions.',
                    'Web-based live stenography, anywhere.'
                  ]}
                  typeSpeed={40} />
            </p>
            <p style={{
              padding: '0 4rem'
            }}>
              <Link href={`/view?user=stanley&job=mocj`}><a>hello</a></Link>
              Upwordly is a real-time transcription delivery tool and a content management system (CMS) for real-time
              stenographers. You login, create a job, connect your CAT software via a small helper app, and start
              writing. Distribute your live feed to anyone via a short URL and that's it! Since it is web based, there's
              no need for your consumers to install anything on their end. When the job is over, it's your choice to use
              the variety of tools to save or disseminate the transcript or to delete it. Simple.
            </p>
          </div>
        </section>
      </div>
    </Layout>
);

Index.getInitialProps = async function ({ pathname, req }) {
  console.log('initial: ', pathname, req);
  return { pathname: req.pathname || pathname  };
};

export default Index;

