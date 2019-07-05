import React from 'react';
import withAuth from '../../src/helpers/withAuth';

const Dashboard = () => {
  return (
      <div>
        Dashboard
      </div>
  );
};

export default withAuth(Dashboard);
