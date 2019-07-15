import React, { Component, Fragment } from 'react';
import ShareDB from '@teamwork/sharedb/lib/client';
import ReconnectingWebSocket from 'reconnecting-websocket/dist/reconnecting-websocket';
import WS from 'isomorphic-ws';
import otText from 'ot-text';
import { ToastContainer } from 'react-toastify/index';
import {
  DisconnectedToast,
  FetchingToast,
  ReconnectedToast
} from '../Toasts';

class LiveTranscript extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      connection: {},
      doc: {},
      flag: '≈',
      loading: true,
    };

    this.hasDisconnected = false;
  }

  fetchDoc = host => {
    const server = {
      host: process.env.NODE_ENV === 'production' ? 'upword.ly/ws' : host,
      port: process.env.NODE_ENV === 'production' ? '' : ':9090',
      protocol: process.env.NODE_ENV === 'production' ? 'wss://' : 'ws://',
      getAddress: function () {
        return this.protocol + this.host + this.port;
      },
    };

    this.socket = new ReconnectingWebSocket(server.getAddress(), [], {
      WebSocket: WS,
      automaticOpen: true,
      maxReconnectionDelay: 1000,
      reconnectInterval: 1000,
      maxReconnectInterval: 2000,
      timeoutInterval: 2000,
      maxRetries: Infinity,
    });

    ShareDB.types.register(otText.type);

    const connection = new ShareDB.Connection(this.socket);

    this.setState({
      connection,
      doc: connection.get(this.props.user, this.props.job),
      loading: false,
    });
  };

  componentDidMount() {

    // HasConnected makes sure that the disconnection message isn't
    // shown to the user at start-up.
    FetchingToast();

    this.fetchDoc(window.location.hostname);

    // Will display a message to the user that the connection was lost.
    this.socket.onclose = () => {
      if (!this.hasDisconnected) {
        DisconnectedToast();
        this.hasDisconnected = true;
      }
    };

    // Will display a message to the user that the connection is rectified.
    this.socket.onopen = () => {
      if (this.hasDisconnected) {
        ReconnectedToast();
        this.hasDisconnected = false;
      }
    };
  }

  checkConnection = () => {
    setInterval()
  };

  render() {

    const {loading} = this.state;

    return (
        <Fragment>
          {
            this.props.toasts
              ? <ToastContainer
                    draggable
                    autoClose={ 5000 }
                />
                : ''
          }
          {
            !loading
                ? this.props.render(this.state)
                : ''
          }
        </Fragment>
    );
  }
}

export default LiveTranscript;