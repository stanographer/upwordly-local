import React from 'react';
import { firebase } from '../../firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const {onSetUser} = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        authUser
            ? onSetUser(authUser)
            : onSetUser(null);
      });
    }

    render() {
      return (
          <Component {...this.props} />
      )
    }
  }

  return WithAuthentication;
};

export default withAuthentication;