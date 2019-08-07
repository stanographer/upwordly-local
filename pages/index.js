import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Typed from 'react-typed';
import ReactFullpage from '@fullpage/react-fullpage';
import Button from '../src/components/Landing/Button';
import LogoInverted from '../src/components/Logos/LogoInverted';
import Footer from '../src/components/General/Footer';
import { SIGN_IN, SIGN_UP } from '../src/constants/routes';
import TranscriptionDemo from '../src/components/Landing/TranscriptionDemo';

const Index = () => {
  useEffect(() => {
    // Scrolls the latest text in the demo into view.
    const scroller = setInterval(() => {
      const elem = document.getElementById('transcription-demo');
      elem.scrollTop = elem.scrollHeight;
    }, 2300);

    return () => clearInterval(scroller);
  });

  return (
    <Fragment>
      <Head>
        <title>Upword.ly - Live Transcription CMS</title>
      </Head>
      <ReactFullpage
        licenseKey={process.env.FULL_PAGE_KEY}
        scrollingSpeed={1000}
        sectionsColor={[]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section flex flex-col justify-center items-center text-center h-full bg-bgOverlay">
                <LogoInverted center />
                <div className="mt-1">
                  <Typed
                    className="marquee text-teal-200 text-md lg:text-lg"
                    data-test="typed-text"
                    strings={[
                      'One platform to sync, send, and integrate your real-time transcriptions.',
                      'Web-based live stenography, anywhere.',
                    ]}
                    typeSpeed={40}
                    loop={false}
                  />
                </div>
                <div className="mt-10">
                  <Button
                    color="green"
                    text="Learn more"
                    type="button"
                    onClick={() => fullpageApi.moveSectionDown()}
                  />
                </div>
              </div>
              <div className="section flex">
                <header className="text-center mb-10 text-5xl font-bold italic text-bg bg-highlighter flex-shrink-0">
                  About Upword.ly
                </header>
                <main className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 p-2">
                    <div className="text-fg text-center p-2">
                      <p className="w-9/12 lg:w-7/12 text-left mx-auto my-5 text-md lg:text-lg">
                        <span className="text-highlighter font-bold italic">
                          Upword.ly
                        </span>{' '}
                        is a real-time transcription delivery tool and a content
                        management system (CMS) for real-time stenographers. You
                        log in, create a job, connect your CAT software via a
                        small helper app, and start writing.
                      </p>
                      <p className="w-9/12 lg:w-7/12 text-left mx-auto my-5 text-md lg:text-lg">
                        Since it is web-based, there's{' '}
                        <span className="font-bold italic text-green-200">
                          no need
                        </span>{' '}
                        for your consumers to install anything on their end.
                        Distribute your live feed to anyone via a personalized
                        URL and that's it!
                      </p>
                      <p className="w-9/12 lg:w-7/12 text-left mx-auto my-5 text-md lg:text-lg">
                        When the job is over, it's your choice to use the
                        variety of tools to save or disseminate the transcript
                        or to delete it.{' '}
                        <span className="font-bold italic text-green-200">
                          Simple.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full mt-6 lg:mt-0 lg:w-2/5 p-2 lg:pr-12 pt-10">
                    <div className="browser-mockup with-url">
                      <div
                        id="transcription-demo"
                        className="w-full mx-auto text-fg font-mono text-left bg-black p-2 break-words h-64 overflow-y-scroll whitespace-pre-wrap px-5 py-5"
                      >
                        <TranscriptionDemo />
                      </div>
                    </div>
                  </div>
                </main>
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Fragment>
  );
};

export default Index;
