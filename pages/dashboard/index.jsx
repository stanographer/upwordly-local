import React from 'react';
import DashboardComponent from '../../src/components/Dashboard/DashboardComponent';
import Wrapper from '../../src/components/Dashboard/Wrapper';
import withAuth from '../../src/components/Session/WithAuth';

const Dashboard = props => {
  return (
    <Wrapper htmlTitle="Upword.ly - Dashboard" title="dashboard">
      <DashboardComponent {...props} />
    </Wrapper>
  );
};

export default withAuth(Dashboard);
