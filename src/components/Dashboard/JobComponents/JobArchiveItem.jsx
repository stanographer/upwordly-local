import React, { Fragment, useState } from 'react';
import router from 'next/router';

const JobArchiveItem = ({deleteAJob, getUserData, id, job}) => {
  let [confirmDelete, setConfirmDelete] = useState(false);

  const areYouSureToDelete = () => {
    setConfirmDelete(true);
    setTimeout(() => setConfirmDelete(false), 5000);
  };

  console.log('key', id);
  const location = () => {
    return `${document.location.protocol}//${document.location.host}/editor?user=${job.username}&job=${job.shortName}`;
  };

  return (
      <div data-test="job-archive-item"
           className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
        <div className="w-1/4 md:w/12 px-4 flex items-center">
          <span className="text-md font-mono text-orange-200"
                data-test="job-shortName">
            {job.shortName}
          </span>
        </div>
        <div className="flex w-1/4 md:w/12">
          <div className=" px-4">
            <div className="text-left">
              <div className="flex flex-grow"
                   data-test="job-title">
                "{job.title}"
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-1/4 md:w/12">
          <div className="px-4">
            <div className="text-left">
              <div className="flex flex-grow"
                   data-test="job-speakers">
                {job.speakers}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-1/4 md:w/12">
          <div className="px-4">
            <div className="text-left">
              <div className="flex flex-grow"
                   data-test="job-createdTime">
                {job.createdTime}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 py-4 px-6 text-right">
          {
            !confirmDelete
                ? <Fragment>
                  <button type="button"
                          className="bg-blue hover:bg-brightGreen hover:text-bg2 text-white border border-blue-dark rounded px-4 py-2 mr-2"
                          onClick={e => {
                            router.push(location());
                            e.preventDefault();
                          }}>
                    <p className="px-2 inline">Open</p>
                  </button>
                  <button type="button"
                          className="bg-red-600 hover:bg-red-400 text-white border border-blue-dark rounded px-4 py-2"
                          onClick={e => {
                            areYouSureToDelete();
                            e.preventDefault();
                          }}>
                    <p className="px-2 inline">Delete</p>
                  </button>
                </Fragment>
                : <p className="underline text-red-400 text-lg cursor-pointer"
                     onClick={e => {
                       deleteAJob(id, job.username, job.shortName, getUserData);
                       e.preventDefault();
                     }}>
                  Yes, delete "{job.shortName}" permanently.
                </p>
          }
        </div>
      </div>
  );
};

export default JobArchiveItem;
