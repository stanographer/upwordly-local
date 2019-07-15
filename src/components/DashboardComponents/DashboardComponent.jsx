import React, { Fragment, useEffect, useState } from 'react';
import JobCreator from '../../components/Widgets/JobCreator';
import JobList from '../../components/Widgets/JobList';
import Typed from 'react-typed';
import {
  startJob,
  getUser,
  getAllJobsByUser
} from '../../firebase/db';

const DashboardComponent = ({user}) => {
  console.log('dashboard props', user.uid);

  let [authUser, setAuthUser] = useState({});
  let [jobList, setJobList] = useState({});
  let [job, setJob] = useState({});
  let [errors, setErrors] = useState([]);

  const loadUser = user => {
    setAuthUser(user);
    console.log('username', user.username);
    getAllJobsByUser(user.username, jobs => setJobList(jobs));
  };

  const setShortName = val => {
    const re = /^[a-z0-9_\-]+$/i;

    val = val.trim().toLowerCase();

    if (!val.match(re) && val !== '') {
      setJob({
        shortName: val.trim().toLowerCase()
      });

      setErrors([
        'Your job shortname may only contain lower-case letters, numbers, hyphens, and underscores.',
      ]);
    } else if (val.length > 100) {
      setErrors([
        'Your job shortname may not exceed 100 characters in length.',
      ]);
    } else {
      setJob({
        shortName: val.trim().toLowerCase()
      });

      setErrors([]);
    }
  };

  const setTitleAndSpeakers = (key, val) => {
    // Replaces backticks with single quotes.
    if (val.includes('`')) {
      val = val.replace('`', '\'');
    }

    // Escapes curly braces.
    if (val.includes('{')) {
      val = val.replace('{', '\{');
    }

    if (val.includes('}')) {
      val = val.replace('{', '\}');
    }

    setJob({
      ...job,
      [key]: val,
    });
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
          <JobCreator
              authUser={authUser}
              errors={errors}
              job={job}
              setErrors={setErrors}
              setShortName={setShortName}
              setTitleAndSpeakers={setTitleAndSpeakers}
              uid={user.uid}
          />
          <JobList
              startJob={startJob}
              jobList={jobList}
          />
        </div>
      </Fragment>
  );
};

export default DashboardComponent;
