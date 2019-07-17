import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import router from 'next/router';
import { auth } from '../../firebase/firebase';
import * as ROUTES from '../../constants/routes';
import { getAllJobsByUser, getUser } from '../../firebase/db';

const NavLogo = dynamic(() => import('../Logos/NavLogo'));

const INITIAL_STATE = {
  auth: {},
  error: '',
  jobs: {},
  status: 'LOADING',
  user: {},
};

const withAuth = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {...INITIAL_STATE};
    }

    getUserData = async (auth, authUser) => {
      await getUser(authUser.uid, user => {
        this.setState({
          auth: auth.currentUser,
          user,
        });

        getAllJobsByUser(user.username, jobs => {
          this.setState({
            ...this.state,
            jobs,
          });
        });
      });
    };

    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.getUserData(auth, authUser)
              .then(() => {
                this.setState({
                  ...this.state,
                  status: 'SIGNED_IN',
                });
              })
              .catch(err => {
                this.setState({
                  status: 'ERROR',
                  error: err,
                });
              });
        } else {
          router.push(ROUTES.SIGN_IN);
        }
      });
    }

    renderContent() {
      const {
        auth,
        error,
        jobs,
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
                auth={auth}
                getUserData={this.getUserData}
                jobs={jobs}
                user={user}
            />
        );
      } else {
        return (
            <div className="container mx-auto h-full flex justify-center items-center">
              <div className="w-full max-w-sm mt-20">
                <NavLogo center={true} />
                <p className="text-center mt-2">Error logging in.</p>
                <p className="text-center mt-2 text-sm">{error}</p>
              </div>
            </div>
        );
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