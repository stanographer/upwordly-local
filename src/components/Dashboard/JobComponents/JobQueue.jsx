import React from 'react';
import JobItem from './JobItem';
import JobsNull from './JobsNull';

const JobQueue = ({jobs, setActiveComponent, startJob}) => {
  const list = Object.keys(jobs)
      .filter(key => jobs[key].started === false || null || undefined);

  return (
      <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
        <div
            className="flex-grow flex flex-col bg-bg2 border-t border-b sm:rounded sm:border shadow overflow-hidden">
          <div className="border-b">
            <div className="flex justify-between px-6 -mb-px">
              <h3 className="text-red-200 py-4 font-normal text-lg">Upcoming Job Queue</h3>
            </div>
          </div>
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
                            schedule new jobs or visit your <a className="text-teal-200 underline cursor-pointer"
                                                               href="#"
                                                               onClick={e => {
                                                                 e.preventDefault();
                                                                 setActiveComponent(4);
                                                               }}>
                        Archive
                      </a> to view past jobs.</>}
                />
          }
        </div>
      </div>
  );
};

export default JobQueue;
