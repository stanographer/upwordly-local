import React, { Fragment, useState } from 'react';
import JobCreator from '../JobComponents/JobCreator';
import JobQueue from '../JobComponents/JobQueue';
import Typed from 'react-typed';
import {
  startJob,
} from '../../../firebase/db';

const DashboardComponent = ({auth, getUserData, jobs, user}) => {
  console.log('dashboard props', user.uid);

  let [job, setJob] = useState({});
  let [errors, setErrors] = useState([]);

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

  const resetJobCreator = () => {
    setJob({});
  };

  return (
      <Fragment>
        <p className="font-apercu text-5xl">Dashboard</p>
        <Typed
            className="marquee text-teal-200"
            strings={[
              `Welcome to your control center.`
            ]}
            typeSpeed={40} />
        {user
            ? <p className="pt-4 pb-2 text-green-200">Logged in as {user.fullName}</p>
            : ''}
        <div className="flex flex-wrap -mx-4 my-10">
          <JobCreator
              auth={auth}
              user={user}
              errors={errors}
              getUserData={getUserData}
              job={job}
              resetJobCreator={resetJobCreator}
              setErrors={setErrors}
              setShortName={setShortName}
              setTitleAndSpeakers={setTitleAndSpeakers}
              uid={auth.uid}
          />
          <JobQueue
              startJob={startJob}
              jobs={jobs}
          />
        </div>
      </Fragment>
  );
};

export default DashboardComponent;
