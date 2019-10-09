import React from 'react';
import JobArchiveItem from './JobArchiveItem';
import JobsNull from './JobsNull';

const JobList = ({ deleteAJob, getUserData, jobs }) => {
  let list;
  if (
    jobs &&
    !(Object.entries(jobs).length === 0 && jobs.constructor === Object)
  ) {
    list = Object.keys(jobs).filter(key => jobs[key].started);
  }

  return (
    <div className="w-full mb-6 lg:mb-0 px-4 flex flex-col">
      <div className="flex-grow flex flex-col bg-bg2 border-t border-b sm:rounded sm:border shadow overflow-hidden">
        <div className="border-b">
          <div className="flex justify-between px-6 -mb-px">
            <h3 className="text-red-200 py-4 font-normal text-lg">
              Job Archive
            </h3>
          </div>
        </div>
        {list && list.length > 0 ? (
          list
            .map(key => {
              return (
                <JobArchiveItem
                  deleteAJob={deleteAJob}
                  getUserData={getUserData}
                  key={key}
                  id={key}
                  job={jobs[key]}
                />
              );
            })
            .reverse()
        ) : (
          <JobsNull
            heading="No jobs in your Archive"
            info="Jobs only appear in your Archive after you have scheduled them and started them. Otherwise they appear on your Upcoming Job Queue."
          />
        )}
      </div>
    </div>
  );
};

export default JobList;
