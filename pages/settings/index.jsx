import React from 'react';
import SettingsComponent from '../../src/components/Dashboard/SettingsComponent';
import Wrapper from '../../src/components/Dashboard/Wrapper';
import withAuth from '../../src/components/Session/WithAuth';

const Settings = props => {
  return (
      <Wrapper
          htmlTitle="Upword.ly - Settings"
          title="settings">
        <SettingsComponent {...props} />
      </Wrapper>
  );
};

export default withAuth(Settings);