import React, { Component, Fragment } from 'react';
import ShareDB from '@teamwork/sharedb/lib/client';
import ReconnectingWebSocket from 'reconnecting-websocket';
import WS from 'isomorphic-ws';
import otText from 'ot-text';

class LiveTranscript extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      connection: {},
      doc: {},
      flag: '≈',
      loading: true,
    };
  }

  fetchDoc = (host) => {
    const server = {
      host: process.env.REACT_APP_ENV === 'production' ? 'upword.ly/ws' : host,
      port: process.env.REACT_APP_ENV === 'production' ? '' : ':9090',
      protocol: process.env.REACT_APP_ENV === 'production' ? 'wss://' : 'ws://',
      getAddress: function () {
        console.log(this.protocol + this.host + this.port);
        return this.protocol + this.host + this.port;
      },
    };

    const socket = new ReconnectingWebSocket(server.getAddress(), [], {
      WebSocket: WS,
      automaticOpen: true,
      maxReconnectionDelay: 2000,
      reconnectInterval: 2000,
      maxReconnectInterval: 3000,
      timeoutInterval: 2000,
      maxRetries: Infinity,
    });

    ShareDB.types.register(otText.type);

    const connection = new ShareDB.Connection(socket);

    this.setState({
      connection,
      doc: connection.get(this.props.user, this.props.job),
      loading: false,
    });
  };

  componentDidMount() {
    this.fetchDoc(window.location.hostname);
  }

  render() {
    const {loading} = this.state;

    return (
        <Fragment>
          {
            !loading
                ? this.props.render(this.state)
                : null
          }
        </Fragment>
    );
  }
}

export default LiveTranscript;