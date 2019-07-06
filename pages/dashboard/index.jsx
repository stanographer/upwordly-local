import React from 'react';
import withAuth from '../../src/helpers/withAuth';

const Dashboard = () => {
  return (
      <div>
        Dashboard you can't seee meeee
      </div>
  );
};

export default withAuth(Dashboard);
