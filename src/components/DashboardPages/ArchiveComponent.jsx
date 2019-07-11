import React, { Fragment, useEffect, useState } from 'react';
import Typed from 'react-typed';
import { deleteJob, getAllJobsByUser, getUser } from '../../firebase/db';
import { deleteShareDbJob } from '../../ShareDB/actions';
import JobArchiveList from '../Widgets/JobArchiveList';

const ArchiveComponent = ({user}) => {
  let [pastJobs, setPastJobs] = useState([]);
  let [deleteSuccess, setDeleteSuccess] = useState(false);
  let [errors, setErrors] = useState('');

  const deleteSuccessMessage = status => {
    if (status === true) {
      setDeleteSuccess(true);
      setTimeout(() => setDeleteSuccess(false), 2000);
    } else {
      setErrors('Deleting of job unsuccessful.');
      setTimeout(() => setErrors(''), 2000);
    }
  };

  const loadUser = user => {
    getAllJobsByUser(user.username, jobs => setPastJobs(jobs));
  };

  const deleteAJob = (id, user, shortName) => {
    const url = `${document.location.protocol}//${document.location.host}`;

    deleteShareDbJob(url, user, shortName)
        .then(() => deleteJob(user.uid, id, deleteSuccessMessage))
        .catch(err => deleteSuccessMessage(false))
  };

  useEffect(() => {
    try {
      getUser(user.uid, loadUser);
    } catch (err) {
      console.error('error', err);
    }
  }, []);

  return (
      <Fragment>
        <p className="font-apercu text-5xl">Job Archive</p>
        <Typed
            className="marquee text-teal-200"
            strings={[
              'View your all jobs here.'
            ]}
            typeSpeed={40} />
        {
          errors
              ? <p className="text-lg text-green-400 mb-4">{errors}</p>
              : ''
        }
        <div className="flex flex-wrap -mx-4 my-10">
          <JobArchiveList
              jobList={pastJobs}
              deleteAJob={deleteAJob}
              deleteSuccess={deleteSuccess}
          />
        </div>
      </Fragment>
  );
};

export default ArchiveComponent;
