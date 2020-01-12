import React, { Fragment } from 'react';
import ViewComponent from '../../../src/components/View';

const Watch = props => {
  const { user, job } = props;
  return (
    <Fragment>
      {user && job ? (
        <ViewComponent user={user} job={job} />
      ) : (
        <div>
          <h2>URL incorrectly formatted</h2>
          <p>
            Live transcription URLs must be in the form:{' '}
            <i>upword.ly/watch/[username]/[job slug]</i>.
          </p>
        </div>
      )}
    </Fragment>
  );
};

Watch.getInitialProps = ({ query }) => {
  return query;
};

export default Watch;
