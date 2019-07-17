import React, { Fragment, useState } from 'react';
import JobCreator from '../JobComponents/JobCreator';
import JobList from '../JobComponents/JobList';
import Typed from 'react-typed';
import {
  startJob,
} from '../../../firebase/db';
import { setShortName, setTitleAndSpeakers } from './utils/funcs';

const DashboardComponent = ({auth, getUserData, jobs, user}) => {
  console.log('dashboard props', user.uid);

  let [job, setJob] = useState({});
  let [errors, setErrors] = useState([]);

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
              setErrors={setErrors}
              setShortName={setShortName}
              setTitleAndSpeakers={setTitleAndSpeakers}
              uid={auth.uid}
          />
          <JobList
              startJob={startJob}
              jobList={jobs}
          />
        </div>
      </Fragment>
  );
};

export default DashboardComponent;
