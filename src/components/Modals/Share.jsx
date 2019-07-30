import React, { Fragment } from 'react';
import WidgetContext from '../../providers/WidgetContext';
import {
  faFileDownload,
  faRetweet
} from '@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import fetchTranscript from '../../utils/fetchTranscript';

const Share = ({job, user}) => {
  return (
      <WidgetContext.Consumer>
        {context => (
            <Fragment>
              <form className="w-full max-w-sm">
                <div>
                  <button
                      className="border rounded text-teal-200 bg-bg2 border-bg2 hover:border-transparent hover:text-bg hover:bg-teal-200 hover:border-teal-200 text-lg mt-2 mx-0 px-3 py-2 font-apercu"
                      type="button"
                  onClick={() => fetchTranscript(job, user)}>
                    <FontAwesomeIcon icon={faFileDownload} className="pr-2" />
                    Save Transcription as .txt
                  </button>
                </div>
                <div className="mt-4">
                  <button
                      className="border rounded text-teal-200 bg-bg2 border-bg2 hover:border-transparent hover:text-bg hover:bg-teal-200 hover:border-teal-200 text-lg mt-2 mx-0 px-3 py-2 font-apercu"
                      type="button">
                    <FontAwesomeIcon icon={faRetweet} className="pr-2" />
                    Tweet Link
                  </button>
                </div>
              </form>
            </Fragment>
        )}
      </WidgetContext.Consumer>
  );
};

export default Share;