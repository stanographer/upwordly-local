import React, { Component, Fragment } from 'react';
import ShareDB from '@teamwork/sharedb/lib/client';
import ReconnectingWebSocket from 'reconnecting-websocket';
import WS from 'isomorphic-ws';
import otText from 'ot-text';

const INITIAL_STATE = {
  connection: {},
  connected: false,
  doc: {},
  flag: '≈',
};

class ConnectionProvider extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ...INITIAL_STATE,
    };

    this.socket = {};
    this.connection = {};
  }

  // Outputs the websockets URI depending on app environment.
  assembleUrl = async host => {
    const domain =
      process.env.NODE_ENV === 'production' ? 'upword.ly/ws' : host;
    const port = process.env.NODE_ENV === 'production' ? '' : ':9090';
    const protocol = process.env.NODE_ENV === 'production' ? 'wss://' : 'ws://';

    return protocol + domain + port;
  };

  fetchDoc = host => {
    const { connected } = this.state;

    this.assembleUrl(host).then(url => {
      // Create a reconnecting websocket connection.
      this.socket = new ReconnectingWebSocket(url, [], {
        WebSocket: WS,
        connectionTimeout: 1000,
        minReconnectionDelay: 400 + Math.random() * 4000,
        minUptime: 8000,
        maxReconnectionDelay: 3000,
        maxRetries: Infinity,
        reconnectionDelayGrowFactor: 1.2,
      });

      // To display a message to the user that the connection is re-established.
      // this.socket.onopen = () => {
      //   console.log('ok ok!');
      //   if (!connected) {
      //     this.props.onReconnect();
      //     this.setState({
      //       connected: true,
      //     });
      //   }
      // };

      // Register text OT type.
      ShareDB.types.register(otText.type);

      // Establish connection with ShareDB server.
      this.connection = new ShareDB.Connection(this.socket);

      this.setState({
        connection: this.connection,
        connected: true,
        doc: this.connection.get(this.props.user, this.props.job),
      });
    });
  };

  componentDidMount() {
    // Subscribe to document.
    this.fetchDoc(window.location.hostname);
  }

  componentWillUnmount() {
    this.socket.close();
    this.connection.close();
  }

  render() {
    const { connected } = this.state;

    return (
      <Fragment>{connected ? this.props.render(this.state) : ''}</Fragment>
    );
  }
}

export default ConnectionProvider;
