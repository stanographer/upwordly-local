import React from 'react';

const Watch = props => {
  const { user, job } = props;
  return (
    <div>
      User: {user}, job: {job}
    </div>
  );
};

Watch.getInitialProps = ({ query }) => {
  return query;
};

export default Watch;
