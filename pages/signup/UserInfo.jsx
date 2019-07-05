import React, {Fragment} from 'react';

const UserInfo = () => {
  return (
      <Fragment>
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-hairline mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username"
                 type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-grey-darker text-sm font-hairline mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password"
                 type="password" placeholder="******************" />
        </div>
      </Fragment>
  );
};

export default UserInfo;
