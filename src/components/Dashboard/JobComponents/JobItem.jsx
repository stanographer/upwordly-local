import React from 'react';
import Link from 'next/link';

const JobItem = ({id, job, startJob}) => {

  return (
      <div className="flex-grow flex px-6 py-6 text-grey-darker border-b -mx-4">
        <div className="flex-col flex-grow justify-between px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {job.title
                ? `"${job.title}"`
                : <span className="capitalize">"{job.shortName}"</span>}
          </div>
          <p className="text-green-200 text-md font-mono">
            {job.shortName}
          </p>
          <p className="text-gray-600">{job.createdTime}</p>
        </div>
        <div className="flex mx-4 my-4">

          <Link href={{
            pathname: '/editor',
            query: {
              user: job.username,
              job: job.shortName
            }
          }} prefetch>
            <button type="button"
                    className="bg-blue hover:bg-brightGreen hover:text-bg2 text-white border border-blue-dark rounded px-4 py-2"
                    onClick={() => {
                      console.log('job IDDDDD', id);
                      startJob(id)
                    }}>
              <p className="px-2 inline">Start</p>
            </button>
          </Link>

        </div>

      </div>
  );
};

export default JobItem;
