import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faExclamation,
  faRunning,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';

// Toast contents.

const Fetching = () => {
  return (
      <div className="text-lg text-bg font-apercu">
        <FontAwesomeIcon
            className="pr-2"
            icon={faRunning}
        />
        <strong>Fetching job!</strong>
      </div>
  );
};

const Loaded = () => {
  return (
      <div className="text-lg text-bg font-apercu p-3">
        <FontAwesomeIcon
            className="pr-2"
            icon={faCheck}
        />
        <strong>Live transcription is now active!</strong>
      </div>
  );
};

const Disconnected = () => {
  return (
      <div className="text-lg text-bg font-apercu p-3">
        <FontAwesomeIcon
            className="pr-2"
            icon={faExclamation}
        />
        <strong>Attempting to reconnect...</strong>
        <br />
        <br />
        You can also try refreshing the page.
      </div>
  );
};

const Reconnected = () => {
  return (
      <div className="text-lg text-bg font-apercu p-3">
        <FontAwesomeIcon
            className="pr-2"
            icon={faWifi}
        />
        <strong>Connection Restored.</strong>
        <br />
        <em>Whew! 🦄</em>

      </div>
  );
};

// Toast components.

let toastId = null;

const FetchingToast = () => toastId = toast(<Fetching />, {
  autoClose: false,
  position: 'bottom-right',
  type: toast.TYPE.WARNING,
  closeOnClick: true,
  draggable: true
});

const LoadedToast = () => {
  toast.dismiss(toastId);
  toast(<Loaded />, {
    autoClose: 3000,
    type: toast.TYPE.SUCCESS,
    pauseOnFocusLoss: false,
    position: 'bottom-right',
    closeOnClick: true,
    draggable: false,
    className: 'rotateY animated'
  });
};

const DisconnectedToast = () => {
  if (!toast.isActive(toastId)) {
    toast.dismiss(toastId);
    toastId = toast(<Disconnected />, {
      autoClose: false,
      position: 'top-center',
      type: toast.TYPE.ERROR,
      closeOnClick: true,
      draggable: true,
      toastId: toastId
    });
  }

};

const ReconnectedToast = () => {
  if (toast.isActive(toastId)) {
    toast.dismiss(toastId);
    toastId = toast(<Reconnected />, {
      autoClose: 1500,
      position: 'top-center',
      type: toast.TYPE.SUCCESS,
      closeOnClick: true,
      draggable: true
    });
  }
};

export {
  DisconnectedToast,
  FetchingToast,
  LoadedToast,
  ReconnectedToast,
};