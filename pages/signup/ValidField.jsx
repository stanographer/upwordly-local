import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ValidField = ({message}) => {
  return (
      <Fragment>
        <div className="mb-4">
          <div className="flex items-center bg-green-600 text-white text-sm font-bold px-4 py-3" role="alert">
           <FontAwesomeIcon icon={faCheck} className="mx-2" />
            <p>{message}</p>
          </div>
        </div>
      </Fragment>
  );
};

export default ValidField;
