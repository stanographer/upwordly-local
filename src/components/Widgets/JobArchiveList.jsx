import React from 'react';
import JobArchiveItem from './JobArchiveItem';
import JobsNull from './JobsNull';

const JobList = ({deleteAJob, jobList}) => {
  console.log('jobList', jobList);
  return (
      <div className="w-full mb-6 lg:mb-0 px-4 flex flex-col">
        <div className="flex-grow flex flex-col bg-bg2 border-t border-b sm:rounded sm:border shadow overflow-hidden">
          <div className="border-b">
            <div className="flex justify-between px-6 -mb-px">
              <h3 className="text-red-200 py-4 font-normal text-lg">Job Archive</h3>
            </div>
          </div>
          {
            jobList
                ? Object.keys(jobList)
                    .map(key => {
                      if (jobList[key].started === true) {
                        return <JobArchiveItem
                            deleteAJob={deleteAJob}
                            key={key}
                            id={key}
                            job={jobList[key]}
                        />;
                      }
                    })
                    .reverse()
                : <JobsNull
                    heading="No jobs in your Archive"
                    info="Jobs only appear here after you have scheduled them and started them. Otherwise they appear on your queue."
                />
          }
        </div>
      </div>
  );
};

export default JobList;
