import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Token = () => {
  return (
      <Fragment>
        <div className="mb-4">
          <label className="block text-grey-darker text-md font-hairline mb-6" htmlFor="username">
            Please enter your <strong>Registration Token</strong>.
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-bg"
                 id="token"
                 type="text"
                 placeholder="Registration Token"
                 required />
        </div>
        <div className="flex items-center justify-between">
          <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Get a token
          </a>
          <button
              className="bg-blue hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200"
              type="button">
            Move on
            <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
          </button>

        </div>
      </Fragment>
  );
};

export default Token;
