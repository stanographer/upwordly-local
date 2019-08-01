import React, { Fragment } from 'react';
import Heading from '../Heading';

const AccountComponent = () => {
  return (
      <Fragment>
        <Heading
            heading="Account"
            typedText={['Manage your account here.']}
        />
      </Fragment>
  );
};

export default AccountComponent;
