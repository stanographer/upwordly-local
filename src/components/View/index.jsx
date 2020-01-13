import React from 'react';
import ConnectionProvider from '../ShareDB/ConnectionProvider';
import { DisconnectedToast, ReconnectedToast } from '../Toasts';
import Document from '../ShareDB/Document';

function View(props) {
  const { user, job } = props;

  return (
    <ConnectionProvider
      onDisconnect={DisconnectedToast}
      onReconnect={ReconnectedToast}
      user={user}
      job={job}
      render={state => <Document editable={false} {...state} />}
    />
  );
}

export default View;
