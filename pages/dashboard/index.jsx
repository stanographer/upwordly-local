import React, { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';
import withAuth from '../../src/helpers/withAuth';
import Head from 'next/head';
import NavDashboard from '../../src/components/Controls/NavDashboard';

const ArchiveComponent = dynamic(() =>
    import('../../src/components/DashboardComponents/ArchiveComponent'));
const AccountComponent = dynamic(() =>
    import('../../src/components/DashboardComponents/AccountComponent'));
const BatchJobCreatorComponent = dynamic(() =>
    import('../../src/components/DashboardComponents/BatchJobCreator'));
const DashboardComponent = dynamic(() =>
    import('../../src/components/DashboardComponents/DashboardComponent'));
const SettingsComponent = dynamic(() =>
    import('../../src/components/DashboardComponents/SettingsComponent'));

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
        return <BatchJobCreatorComponent {...props} />
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
      </Fragment>
  );
};

export default withAuth(Dashboard);
