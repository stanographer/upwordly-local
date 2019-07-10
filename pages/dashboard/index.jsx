import React, { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';
import withAuth from '../../src/helpers/withAuth';
import Head from 'next/head';
import NavDashboard from '../../src/components/Controls/NavDashboard';

const AccountComponent = dynamic(() =>
    import('../../src/components/DashboardPages/AccountComponent'));
const DashboardComponent = dynamic(() =>
    import('../../src/components/DashboardPages/DashboardComponent'));
const SettingsComponent = dynamic(() =>
    import('../../src/components/DashboardPages/SettingsComponent'));

const Dashboard = props => {
  let [active, setActive] = useState(0);
  console.log(props);

  // Switches the active component based on the number.
  const ActiveComponent = number => {
    switch (number) {
      case 0:
        return <DashboardComponent {...props} />;
      case 1:
        return <AccountComponent />;
      case 2:
        return <SettingsComponent />;
    }
  };

  return (
      <Fragment>
        <Head>
          <title>Upword.ly Dashboard</title>
        </Head>
        <NavDashboard
            active={active}
            setActive={setActive}
        />
        <section className="container mx-auto px-16 py-32 sm:py-24">
          {ActiveComponent(active)}
        </section>
      </Fragment>
  );
};

export default withAuth(Dashboard);
