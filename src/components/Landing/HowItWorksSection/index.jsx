import React, { Fragment } from 'react';
import Footer from '../../General/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faKeyboard,
  faShare,
} from '@fortawesome/free-solid-svg-icons';

const HowItWorksSection = () => {
  return (
    <Fragment>
      <header
        className="text-center
        mb-10
        text-5xl
        font-bold
        italic
        text-bg
        bg-highlighter
        flex-shrink-0"
      >
        How it works
      </header>
      <p
        className="text-center
        my-4
        text-lg
        font-bold
        text-green-200
        flex-shrink-0"
      >
        The simple, fast, and modern solution for steno reporters and
        captioners.
      </p>
      <main className="flex flex-wrap mx-10">
        <div className="flex flex-grow flex-wrap mb-4">
          <div className="flex w-full lg:w-1/3 h-auto px-4 py-4 lg:py-10 justify-center">
            <div className="bg-bg2 max-w-sm rounded overflow-hidden shadow-lg">
              <div className="flex flex-col items-center mx-8 mb-4 mt-8 text-5xl text-highlighter">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-green-200 text-xl mb-4 text-center">
                  Schedule a job.
                </div>
                <p className="text-fg mb-6">
                  Whether it be a conference or a one-on-one CART/captioning
                  situation, create shareable jobs on the fly with Upword.ly and
                  your realtime output becomes{' '}
                  <span className="text-green-200 font-bold italic">
                    instantly viewable
                  </span>{' '}
                  on any device with a modern browser and stable Internet
                  connection. We make ADA compliance fun and easy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-1/3 h-auto px-6 py-4 lg:py-10 justify-center">
            <div className="bg-bg2 max-w-sm rounded overflow-hidden shadow-lg">
              <div className="flex flex-col items-center mx-8 mb-4 mt-8 text-5xl text-highlighter">
                <FontAwesomeIcon icon={faKeyboard} />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-green-200 text-xl mb-4 text-center">
                  Connect your stenography device.
                </div>
                <p className="text-fg mb-6">
                  Although we recommend{' '}
                  <a
                    href="http://ploversteno.org"
                    className="text-teal-200 underline"
                    title="Plover"
                  >
                    Plover
                  </a>{' '}
                  for best results, Upword.ly also supports CAT software
                  COM-port output as well as writing directly into the web app.
                  Either way, distributed servers and WebSockets connections
                  mean your viewers get text at{' '}
                  <span className="text-green-200 font-bold italic">
                    nearly instantaneous speeds.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-1/3 h-auto px-6 py-4 lg:py-10 justify-center">
            <div className="bg-bg2 max-w-sm rounded overflow-hidden shadow-lg">
              <div className="flex flex-col items-center mx-8 mb-4 mt-8 text-5xl text-highlighter">
                <FontAwesomeIcon icon={faShare} />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-green-200 text-xl mb-4 text-center">
                  Share, publish, and save.
                </div>
                <p className="text-fg mb-6">
                  Upword.ly automatically saves all your work into a repository
                  as you go so there&apos;s no need to worry if you hit that
                  save button or not. Plus, you get a slew of tools to make{' '}
                  <span className="text-green-200 font-bold italic">
                    sharing, saving, emailing, and disseminating
                  </span>{' '}
                  your transcriptions right from your Dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default HowItWorksSection;
