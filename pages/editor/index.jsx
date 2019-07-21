import React, { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import EditorComponent from '../../src/components/EditorComponent';
import withAuth from '../../src/components/Session/WithAuth';
import Wrapper from '../../src/components/Dashboard/Wrapper';
import ConnectionProvider from '../../src/components/ShareDB/ConnectionProvider';
import { getJobDetails } from './functions';

const Editor = props => {
  const {jobs, router} = props;
  const [currentJob, setCurrentJob] = useState({});

  useEffect(() => {
    getJobDetails(router.query.job, jobs)
        .then(job => {
          setCurrentJob(job);
        });
  }, [jobs]);

  return (
      <Wrapper
          htmlTitle="Upword.ly - Editor"
          title="editor">
        <ConnectionProvider
            user={router.query.user}
            job={router.query.job}
            render={props => {
              return <EditorComponent {...props} currentJob={currentJob} />;
            }}
        />
      </Wrapper>
  );
};

export default withAuth(withRouter(Editor));
