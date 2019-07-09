import React, { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';
import withAuth from '../../src/helpers/withAuth';
import NavDashboard from '../../src/components/Controls/NavDashboard';

const AccountComponent = dynamic(() =>
    import('../../src/components/DashboardPages/AccountComponent'));
const DashboardComponent = dynamic(() =>
    import('../../src/components/DashboardPages/DashboardComponent'));
const SettingsComponent = dynamic(() =>
    import('../../src/components/DashboardPages/SettingsComponent'));

const Dashboard = () => {
  let [active, setActive] = useState(0);

  // Switches the active component based on the number.
  const ActiveComponent = number => {
    switch (number) {
      case 0:
        return <DashboardComponent />;
      case 1:
        return <AccountComponent />;
      case 2:
        return <SettingsComponent />;
    }
  };

  return (
      <Fragment>
        <NavDashboard
            active={active}
            setActive={setActive}
        />
        <section className="container mx-auto px-16 py-32">
          {ActiveComponent(active)}
        </section>
      </Fragment>
  );
};

export default withAuth(Dashboard);
