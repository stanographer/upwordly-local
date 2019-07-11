import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { createJob } from '../../firebase/db';

const JobCreator = ({authUser, errors, job, setErrors, setShortName, setTitleAndSpeakers, uid}) => {
  let [copied, setCopied] = useState(false);
  let [jobCreated, setJobCreated] = useState(false);

  const copiedLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scheduledJob = status => {
    if (status === true) {
      setJobCreated(true);
      setTimeout(() => setJobCreated(false), 2000);
    } else {
      setErrors(['There was an error scheduling that job.']);
      setTimeout(() => setErrors(['']), 1500);
    }
  };

  const errorMessages = errors.map((e, i) => (
      <p className="text-sm text-red-400 mb-4" key={i}>{e}</p>
  ));

  return (
      <form className="w-full lg:w-1/2 px-4" onSubmit={e => {
        createJob(job, authUser.username, uid, scheduledJob);
        // e.preventDefault();
      }}>
        <div className="bg-bg2 border-t border-b sm:rounded sm:border shadow">
          <div className="border-b">
            <div className="flex justify-between px-6 -mb-px">
              <h3 className="text-green-200 py-4 font-normal text-lg">Start a Job</h3>
              <div className="flex">
                <button type="button"
                        className="appearance-none py-4 text-orange-200 border-b border-blue-dark mr-3">
                  Batch Style
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 px-8 pt-8">
              <label className="block text-grey-darker text-md text-bold mb-2" htmlFor="shortname">
                Shortname (required)
              </label>
              <input autoFocus={true}
                     autoComplete="off"
                     spellCheck={false}
                     className={
                       !!errors && errors.length > 0
                           ? 'border-red-500 bg-red-100 shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-red-2100 text-bg font-mono text-md'
                           : 'shadow-lg bg-orange-200 appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md"'
                     }
                     id="shortname"
                     name="shortname"
                     type="shortname"
                     placeholder="(i.e. coachella2019)"
                     value={job.shortName || ''}
                     onChange={e => setShortName(e.target.value)}
                     required
              />
            </div>
            <div className="mb-4 px-8">
              <label className="block text-grey-darker text-md text-bold mb-2" htmlFor="title">
                Title (optional)
              </label>
              <input autoComplete="off"
                     spellCheck={false}
                     className="shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md"
                     id="title"
                     name="title"
                     type="title"
                     placeholder="(i.e. Spreadsheets IRL: The How and Why)"
                     value={job.title || ''}
                     onChange={e => setTitleAndSpeakers(e.target.name, e.target.value)}
              />
            </div>
            <div className="mb-4 px-8">
              <label className="block text-grey-darker text-md text-bold mb-2" htmlFor="speakers">
                Speakers (optional)
              </label>
              <input autoComplete="off"
                     spellCheck={false}
                     className="shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md"
                     id="speakers"
                     name="speakers"
                     type="speakers"
                     placeholder="(i.e. Christopher Hagan, Stanley Sakai)"
                     value={job.speakers || ''}
                     onChange={e => setTitleAndSpeakers(e.target.name, e.target.value)}
              />
              {
                !errors.length && job.shortName && job.shortName.length > 0
                    ? <CopyToClipboard
                        text={`${document.location.protocol}//${document.location.host}/${authUser.username}/${job.shortName}`}
                        onCopy={() => copiedLink()}
                    >
                      <p className={
                        copied
                            ? 'underline border py-4 px-4 mt-6 bg-green-200 text-bg2 font-mono break-words cursor-pointer'
                            : 'underline border py-4 px-4 mt-6 text-teal-200 font-mono break-words cursor-pointer'
                      }>
                        <FontAwesomeIcon className="mx-4" icon={faClipboard} />
                        {`${document.location.protocol}//${document.location.host}/${authUser.username}/${job.shortName}`}
                      </p>
                    </CopyToClipboard>
                    : ''
              }
            </div>
            <div className="text-center px-6 py-4">
              {
                !!errors
                    ? errorMessages
                    : ''
              }
              {
                copied
                    ? <p className="text-lg text-green-400 mb-4">Link copied to clipboard!</p>
                    : ''
              }
              {
                jobCreated
                    ? <p className="text-lg text-green-400 mb-4">Job scheduled successfully!</p>
                    : ''
              }
              <div className="py-8">
                <div className="mb-4">
                  <button type="submit"
                          className="bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded px-6 py-4">
                    Schedule Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

  );
};

export default JobCreator;
