import React from 'react';
import router from 'next/router';

const JobItem = ({id, job, startJob}) => {
  const location = () => {
    return `${document.location.protocol}//${document.location.host}/editor?user=${job.username}&job=${job.shortName}`;
  };

  return (
      <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
        <div className="w-2/5 xl:w-2/5 lg:w-2/3 px-4 flex items-center">
          <span className="text-md font-mono text-green-200">
            {job.shortName}
          </span>
        </div>
        <div className="flex w-3/5 md:w/12">
          <div className="w-1/2 px-4">
            <div className="text-left">
              <div className="flex flex-grow">
                {`"${job.title}"` || ''}
              </div>
            </div>
            <div className="w-1/2 px-4">
              <div className="text-left">
                <div className="flex flex-grow">
                  {`${job.speakers}` || ''}
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 pl-4 text-right">
            <button type="button"
                    className="bg-blue hover:bg-brightGreen hover:text-bg2 text-white border border-blue-dark rounded px-4 py-2"
                    onClick={e => {
                      startJob(id, () => console.log('Job started!'));
                      router.push(location());
                      e.preventDefault();
                    }}>
              <p className="px-2 inline">Start</p>
            </button>
          </div>
        </div>
      </div>
  );
};

export default JobItem;
