import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { deleteJob } from '../../../firebase/db';
import { deleteShareDbJob } from '../../ShareDB/actions';
import Heading from '../Heading';
import JobArchiveList from '../JobComponents/JobArchiveList';
import { auth as currentAuth } from '../../../firebase/firebase';

const ArchiveComponent = ({auth, getUserData, jobs}) => {
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [errors, setErrors] = useState('');

  const deleteSuccessMessage = status => {
    if (status === true) {
      setDeleteSuccess(true);
      setTimeout(() => setDeleteSuccess(false), 5000);
    } else {
      setErrors('Deleting of job unsuccessful.');
      setTimeout(() => setErrors(''), 5000);
    }
  };

  const deleteAJob = (id, user, shortName, cb) => {
    const url =
      process.env.NODE_ENV === 'production'
        ? `${document.location.protocol}//${document.location.host}`
        : `${document.location.protocol}//${document.location.hostname}:9090`;

    deleteShareDbJob(url, user, shortName)
      .then(() => deleteJob(auth.uid, id, deleteSuccessMessage))
      .catch(() => deleteSuccessMessage(false));

    return cb(currentAuth, {uid: auth.uid});
  };

  return (
    <Fragment>
      <Heading
        heading="Archive"
        typedText={['View your all your archived jobs here.']}
      />
      {errors ? (
        <p
          className="text-lg text-red-200 my-4"
          data-test="archive-component-errors"
        >
          {errors}
        </p>
      ) : (
        ''
      )}
      <div className="flex flex-wrap -mx-4 my-10">
        <JobArchiveList
          data-test="archive-component-list"
          jobs={jobs}
          getUserData={getUserData}
          deleteAJob={deleteAJob}
          deleteSuccess={deleteSuccess}
        />
      </div>
    </Fragment>
  );
};

ArchiveComponent.propTypes = {
  user: PropTypes.object,
  getUserData: PropTypes.func,
  deleteAJob: PropTypes.func,
  deleteSuccess: PropTypes.bool,
  jobs: PropTypes.object,
};

export default ArchiveComponent;
