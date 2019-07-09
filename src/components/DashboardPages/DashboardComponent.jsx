import React, { Fragment } from 'react';
import JobCreator from '../../components/Widgets/JobCreator';
import JobList from '../../components/Widgets/JobList';

const DashboardComponent = () => {
  return (
      <Fragment>
        <p className="font-apercu text-4xl">Dashboard</p>
        <div className="flex flex-wrap -mx-4 my-10">
          <JobCreator />
          <JobList />
        </div>
      </Fragment>
  );
};

export default DashboardComponent;
