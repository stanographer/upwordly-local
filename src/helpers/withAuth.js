import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import router from 'next/router';
import { auth } from '../firebase/firebase';
import * as ROUTES from '../constants/routes';

const NavLogo = dynamic(() =>
    import('../components/Logos/NavLogo'));

const withAuth = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        status: 'LOADING',
        user: {},
      };
    }

    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.setState({
            status: 'SIGNED_IN',
            user: auth.currentUser,
          });
        } else {
          router.push(ROUTES.SIGN_IN);
        }
      });
    }

    renderContent() {
      const {
        status,
        user,
      } = this.state;

      if (status === 'LOADING') {
        return (
            <div className="container mx-auto h-full flex justify-center items-center">
              <div className="w-full max-w-sm mt-20">
                <NavLogo center={true} />
                <p className="text-center mt-2">Loading...</p>
              </div>
            </div>
        );
      } else if (status === 'SIGNED_IN') {
        return (
            <Component
                {...this.props}
                user={user}
            />
        )
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