import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const JobArchiveItem = ({deleteAJob, getUserData, id, job}) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const areYouSureToDelete = () => {
    setConfirmDelete(true);
    setTimeout(() => setConfirmDelete(false), 6000);
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
                  <Link href={{
                    pathname: '/editor',
                    query: {
                      user: job.username,
                      job: job.shortName,
                    }
                  }} prefetch>
                    <button type="button"
                            className="bg-blue hover:bg-brightGreen hover:text-bg2 text-white border border-blue-dark rounded px-4 py-2 mr-2">
                      <p className="px-2 inline">Open</p>
                    </button>
                  </Link>
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

JobArchiveItem.propTypes = {
  deleteAJob: PropTypes.func.isRequired,
  getUserData: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  job: PropTypes.object.isRequired,
};

export default JobArchiveItem;
