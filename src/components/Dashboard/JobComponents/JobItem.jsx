import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons/index';
import { EDITOR } from '../../../constants/routes';
import JobComponentButton from './JobComponentButton';

const JobItem = ({id, job, startJob}) => {

  return (
      <div className="flex-grow flex px-3 py-3 lg:px-4 lg:py-4 text-grey-darker border-b -mx-4">
        <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
        <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
          <div className="rounded-full bg-grey inline-flex mr-3">
            <div className="bg-gray-500 px-6 py-6 lg:px-4 lg:py-2 border-b">
              <div className="mb-4">
                {
                  job.title
                      ? <span className="font-bold text-xl">"{job.title}"</span>
                      : <span className="font-bold text-xl capitalize">"{job.shortName}"</span>
                }
                <p className="text-red-200 text-md italic">{job.speakers ? job.speakers : 'No speakers defined.'}</p>
              </div>
              <div>
                <p className="text-green-200 text-md font-mono pb-1">
                  {job.shortName}
                </p>
                <p className="text-gray-600">{job.createdTime}</p>
              </div>
            </div>
            <div className="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
              <div className="bg-grey h-2 w-2 rounded-full mr-2">
                <Link href={{
                  pathname: EDITOR,
                  query: {
                    user: job.username,
                    job: job.shortName
                  }
                }} prefetch>
                  <JobComponentButton
                      color="green"
                      icon={<FontAwesomeIcon icon={faPlayCircle} title="play icon" />}
                      text="Start"
                      onClick={() => {
                        console.log('job IDDDDD', id);
                        startJob(id);
                      }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default JobItem;
