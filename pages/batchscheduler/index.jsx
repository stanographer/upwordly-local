import React from 'react';
import BatchSchedulerComponent from '../../src/components/Dashboard/BatchSchedulerComponent';
import Wrapper from '../../src/components/Dashboard/Wrapper';
import withAuth from '../../src/components/Session/WithAuth';

const BatchJobs = props => {
  return (
      <Wrapper
          htmlTitle="Upword.ly - Batch Job Scheduler"
          title="batch-job-creator">
        <BatchSchedulerComponent {...props} />
      </Wrapper>
  );
};

export default withAuth(BatchJobs);