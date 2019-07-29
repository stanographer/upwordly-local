import React from 'react';
import Link from 'next/link';
import JobItem from './JobItem';
import JobsNull from './JobsNull';
import * as ROUTES from '../../../constants/routes';

const JobQueue = ({jobs, startJob}) => {
  const list = Object.keys(jobs)
      .filter(key => !jobs[key].started || jobs[key].started === false || null || undefined);

  return (
      <section className="w-full mb-6 my-4 lg:mb-0 lg:my-0 lg:w-2/3 px-4">
        <div className="flex-col flex-grow bg-bg2 border rounded shadow overflow-hidden">
          <div className="border-b">
            <div className="flex justify-between px-6 -mb-px">
              <h3 className="text-red-200 py-4 font-normal text-lg">Upcoming Job Queue</h3>
            </div>
          </div>
          <div className="flex flex-col flex-1 text-fg overflow-y-scroll">
            {
              list && list.length > 0
                  ? list
                      .map(key => {
                        if (!jobs[key].started) {
                          return <JobItem
                              key={key}
                              id={key}
                              job={jobs[key]}
                              startJob={startJob}
                          />;
                        }
                      })
                      .reverse()
                  : <JobsNull
                      heading={<>Your <span className="text-red-200">Upcoming Job Queue</span> is empty.</>}
                      info={<>Use the <span className="text-green-200 underline cursor-pointer">Start a Job</span> tool to
                              schedule new jobs or visit your <Link href={ROUTES.ARCHIVE} prefetch><a
                            className="text-teal-200 underline cursor-pointer">
                          Archive
                        </a></Link> to view past jobs.</>
                      }
                  />
            }
          </div>
          <div className="flex justify-between px-6 -mb-px">
            <h3 className="text-red-200 py-4 font-normal text-lg">Upcoming Job Queue</h3>
          </div>
        </div>
      </section>
  );
};

export default JobQueue;
