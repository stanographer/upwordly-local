import React, { Fragment } from 'react';
import Typed from "react-typed";

const AccountComponent = () => {
  return (
      <Fragment>
        <p className="font-apercu text-5xl">Account</p>
        <Typed
            className="marquee text-teal-200"
            strings={[
              'Manage your account here.'
            ]}
            typeSpeed={40} />
      </Fragment>
  );
};

export default AccountComponent;
