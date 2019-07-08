import React from 'react';
import withAuth from '../../src/helpers/withAuth';
import NavDashboard from '../../components/Controls/NavDashboard';

const Dashboard = () => {
  return (
      <div>
        <NavDashboard />
        Dashboard you can't seee meeee
      </div>
  );
};

export default withAuth(Dashboard);
