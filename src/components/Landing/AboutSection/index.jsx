import React, { Fragment, useEffect } from 'react';
import TranscriptionDemo from '../TranscriptionDemo';

const AboutSection = () => {
  useEffect(() => {
    // Scrolls the latest text in the demo into view.
    const scroller = setInterval(() => {
      const elem = document.getElementById('transcription-demo');
      elem.scrollTop = elem.scrollHeight;
    }, 1200);

    return () => clearInterval(scroller);
  }, []);

  return (
    <Fragment>
      <header
        className="text-center
        text-5xl
        font-bold
        italic
        text-bg
        bg-highlighter
        flex-shrink-0"
      >
        About Upword.ly
      </header>
      <p
        className="text-center
        my-4
        text-lg
        font-bold
        text-green-200
        flex-shrink-0"
      >
        This is the modern age of stenography.
      </p>
      <div className="flex flex-wrap">
        <section className="w-full lg:w-1/2 p-2">
          <div className="text-fg text-center p-2">
            <p className="w-9/12 lg:w-7/12 text-left mx-auto my-5 text-md lg:text-lg">
              <span className="text-highlighter font-bold italic">
                Upword.ly
              </span>{' '}
              is a real-time transcription delivery tool and a content
              management system (CMS) for real-time stenographers. You log in,
              create a job, connect your CAT software via a small helper app,
              and start writing.
            </p>
            <p className="w-9/12 lg:w-7/12 text-left mx-auto my-5 text-md lg:text-lg">
              Since it is web-based, there&apos;s{' '}
              <span className="font-bold italic text-green-200">no need</span>{' '}
              for your consumers to install anything on their end. Distribute
              your live feed to anyone via a personalized URL and that&apos;s
              it!
            </p>
            <p className="w-9/12 lg:w-7/12 text-left mx-auto my-5 text-md lg:text-lg">
              When the job is over, it&apos;s your choice to use the variety of
              tools to save or disseminate the transcript or to delete it.{' '}
              <span className="font-bold italic text-green-200">Simple.</span>
            </p>
          </div>
        </section>
        <section
          className="flex
        flex-grow
        justify-center
        lg:flex-none
        lg:flex-grow-0
        lg:justify-start
        lg:w-1/2"
        >
          <div className="w-3/4 mb-10 lg:mt-0 lg:w-5/6 lg:pr-12 lg:pt-24">
            <div className="browser-mockup with-url">
              <div
                id="transcription-demo"
                className="w-full
              mx-auto
              text-fg
              font-mono
              text-left
              bg-black
              p-2
              break-words
              h-64
              overflow-y-scroll
              whitespace-pre-wrap
              px-5
              py-5"
              >
                <TranscriptionDemo />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default AboutSection;
