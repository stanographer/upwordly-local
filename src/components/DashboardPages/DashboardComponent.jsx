import React, { Fragment, useEffect, useState } from 'react';
import JobCreator from '../../components/Widgets/JobCreator';
import JobList from '../../components/Widgets/JobList';
import Typed from 'react-typed';
import { db } from '../../firebase';

const DashboardComponent = ({user}) => {
  console.log('dashboard props', user.uid);

  let [authUser, setAuthUser] = useState({});
  let [job, setJob] = useState({});
  let [errors, setErrors] = useState([]);

  const loadUser = user => {
    setAuthUser(user);
    console.log(user);
  };

  const setShortName = val => {
    const re = /^[a-z0-9_\-]+$/i;

    val = val.trim().toLowerCase();

    if (!val.match(re) && val !== '') {
      setJob({
        shortName: val.trim().toLowerCase()
      });

      setErrors([
        'Your job shortname may only contain lower-case letters, numbers, hyphens, and underscores',
      ]);
    } else {
      setJob({
        shortName: val.trim().toLowerCase()
      });

      setErrors([]);
    }
  };

  useEffect(() => {
    try {
      db.getUser(user.uid, loadUser);
    } catch (err) {
      console.error('error', err);
    }

  }, []);

  return (
      <Fragment>
        <p className="font-apercu text-5xl">Dashboard</p>
        <Typed
            className="marquee text-teal-200"
            strings={[
              `Welcome to your control center.`
            ]}
            typeSpeed={40} />
        {authUser
            ? <p className="pt-4 pb-2 text-green-200">Logged in as {authUser.fullName}</p>
            : ''}
        <div className="flex flex-wrap -mx-4 my-10">
          <p>{job.shortName} {job.title} {job.speakers}</p>
          <JobCreator
              errors={errors}
              job={job}
              setShortName={setShortName}
          />
          <JobList />
        </div>
      </Fragment>
  );
};

export default DashboardComponent;
