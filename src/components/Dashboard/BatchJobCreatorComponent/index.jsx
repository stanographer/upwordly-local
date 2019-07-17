import React, { Fragment, useState, useEffect } from 'react';
import Typed from 'react-typed';
import { batchCreateJobs, getUser } from '../../../firebase/db';

const BatchJobCreatorComponent = ({user}) => {

  let [batch, setBatch] = useState('');
  let [authUser, setAuthUser] = useState({});
  let [message, setMessage] = useState('');

  const loadUser = user => {
    setAuthUser(user);
  };

  const batchSuccessMessage = status => {
    if (status === true) {
      setMessage('Creating batch jobs was a success!');
      setTimeout(() => setMessage(''), 3000);
    }
  };


  useEffect(() => {
    try {
      getUser(user.uid, loadUser);
    } catch (err) {
      console.error('error', err);
    }
  }, []);

  return (
      <Fragment>
        <p className="font-apercu text-5xl">Batch Job Creator</p>
        <Typed
            className="marquee text-teal-200"
            strings={[
              'Type in your preformatted batched jobs here.'
            ]}
            typeSpeed={40} />
        {
          !!message
              ? <p className="text-green-200">{message}</p>
              : ''
        }
        <form onSubmit={e => {
          e.preventDefault();
          batchCreateJobs(authUser.username, user.uid, batch, batchSuccessMessage);
        }}>
        <textarea
            autoFocus={true}
            className="mt-8 text-bg text-lg font-mono p-6"
            rows={15}
            spellCheck="off"
            value={batch}
            onChange={e => setBatch(e.target.value)}
            required
        />
          <button type="submit"
                  className="bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded mt-8 px-6 py-4">
            Schedule Jobs
          </button>
        </form>
      </Fragment>
  );
};

export default BatchJobCreatorComponent;