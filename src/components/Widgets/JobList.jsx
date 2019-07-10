import React from 'react';
import JobItem from './JobItem';
import JobsNull from './JobsNull';

const JobList = ({jobList}) => {
  console.log('jobList', jobList);
  return (
      <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
        <div
            className="flex-grow flex flex-col bg-bg2 border-t border-b sm:rounded sm:border shadow overflow-hidden">
          <div className="border-b">
            <div className="flex justify-between px-6 -mb-px">
              <h3 className="text-red-200 py-4 font-normal text-lg">Your Jobs</h3>
            </div>
          </div>
          {
            jobList
                ? Object.keys(jobList).map(key => <JobItem key={key} job={jobList[key]} />)
                : <JobsNull />
          }
        </div>
      </div>
  );
};

export default JobList;
