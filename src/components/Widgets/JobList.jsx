import React from 'react';
import JobItem from './JobItem';
import JobsNull from './JobsNull';

const JobList = ({jobList, startJob}) => {
  console.log('jobList', jobList);
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
            jobList
                ? Object.keys(jobList)
                    .map(key => {
                      if (!jobList[key].started) {
                        return <JobItem
                            key={key}
                            id={key}
                            job={jobList[key]}
                            startJob={startJob}
                        />;
                      }
                    })
                    .reverse()
                : <JobsNull
                    heading="You don't have any jobs yet!"
                    info="Use the widget on the left to schedule one!"
                />
          }
        </div>
      </div>
  );
};

export default JobList;
