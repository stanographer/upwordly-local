import React, { Fragment, useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll/modules';
import Modal from 'react-modal';
import Provider from '../../components/Session/Provider';
import WidgetContext from '../../providers/WidgetContext';
import ModalComponent from '../Modals/ModalComponent';
import Nav from '../Nav/NavTranscriptView';
import ConnectionProvider from '../ShareDB/ConnectionProvider';
import { DisconnectedToast, ReconnectedToast } from '../Toasts';
import Document from '../ShareDB/Document';
import { ScrollButton } from '../General';

const modalStyles = {
  content: {
    backgroundColor: '#282c34',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow:
      '0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08)',
  },
  overlay: {
    backgroundColor: 'rgb(0, 0, 0, 0.3)',
  },
};

function View(props) {
  const { user, job } = props;
  const [scrolling, setScrolling] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  let interval = 0;

  const startScrolling = () => {
    setScrolling(true);

    interval = setInterval(() => {
      scroll.scrollToBottom({
        delay: 0,
        duration: 100,
        offset: 30,
        isDynamic: true,
        smooth: true,
      });
    }, 500);
  };

  const stopScrolling = () => {
    console.log('stopscrolling');
    setScrolling(false);
    clearInterval(interval);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (scrolling) {
      startScrolling();
    }

    return () => {
      stopScrolling();
    };
  }, [scrolling, startScrolling, stopScrolling]);

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
