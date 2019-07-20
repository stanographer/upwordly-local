import React from 'react';
import AccountComponent from '../../src/components/Dashboard/AccountComponent';
import Wrapper from '../../src/components/Dashboard/Wrapper';
import withAuth from '../../src/components/Session/WithAuth';

const BatchJobs = props => {
  return (
      <Wrapper
          htmlTitle="Upword.ly - Account"
          title="batch-job-creator">
        <AccountComponent {...props} />
      </Wrapper>
  );
};

export default withAuth(BatchJobs);