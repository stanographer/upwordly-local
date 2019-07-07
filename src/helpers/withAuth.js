import React, { Fragment } from 'react';
import router from 'next/router';
import { auth } from '../firebase/firebase';
import NeedsAuth from '../../components/NeedsAuth';

const withAuth = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        status: 'LOADING',
      };
    }

    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        console.log(authUser);
        if (authUser) {
          this.setState({
            status: 'SIGNED_IN'
          });
        } else {
          router.push('/signin');
        }
      });
    }

    renderContent() {
      const {status} = this.state;
      if (status === 'LOADING') {
        return <NeedsAuth />;
      } else if (status === 'SIGNED_IN') {
        return <Component {...this.props} />;
      }
    }

    render() {
      return (
          <Fragment>
            {this.renderContent()}
          </Fragment>
      );
    }
  };
};

export default withAuth;