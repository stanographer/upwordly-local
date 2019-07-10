import React, { Fragment } from 'react';
import Typed from 'react-typed';

const SettingsComponent = () => {
  return (
      <Fragment>
        <p className="font-apercu text-5xl">Settings</p>
        <Typed
            className="marquee text-teal-200"
            strings={[
              'Manage your settings here.'
            ]}
            typeSpeed={40} />
      </Fragment>
  );
};

export default SettingsComponent;
