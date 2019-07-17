import React, { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';
import withAuth from '../../src/components/Session/WithAuth';
import Head from 'next/head';
import NavDashboard from '../../src/components/General/NavDashboard';
import Footer from '../../src/components/General/Footer';

const ArchiveComponent = dynamic(() =>
    import('../../src/components/Dashboard/ArchiveComponent'));
const AccountComponent = dynamic(() =>
    import('../../src/components/Dashboard/AccountComponent'));
const BatchJobCreatorComponent = dynamic(() =>
    import('../../src/components/Dashboard/BatchJobCreatorComponent'));
const DashboardComponent = dynamic(() =>
    import('../../src/components/Dashboard/DashboardComponent'));
const SettingsComponent = dynamic(() =>
    import('../../src/components/Dashboard/SettingsComponent'));

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
      case 4:
        return <ArchiveComponent {...props} />;
      case 5:
        return <BatchJobCreatorComponent {...props} />;
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
        <section className="container mx-auto px-16 py-14 lg:py-13">
          {ActiveComponent(active)}
        </section>
        <Footer />
      </Fragment>
  );
};

export default withAuth(Dashboard);
