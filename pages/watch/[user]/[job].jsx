import React, { Fragment } from 'react';

const Watch = props => {
  const { user, job } = props;
  return (
    <Fragment>
      {user && job ? (
        <div>
          User: {user}, job: {job}
        </div>
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
