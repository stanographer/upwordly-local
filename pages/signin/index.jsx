import React, { Component } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../src/firebase';
import * as ROUTES from '../../src/constants/routes';
import LoginSignInLayout from '../../src/components/Layout/LoginSignInLayout';

const SignIn = () => (
    <SignInComponent />
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
};

class SignInComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = e => {
    const {
      email,
      password,
      error,
    } = this.state;

    e.preventDefault();

    auth.doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({...INITIAL_STATE});
          router.push(ROUTES.DASHBOARD);
        })
        .catch(err => {
          this.setState({error: err.message});
          console.log('error', err);
        });

    console.log(this.state.error);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    router.prefetch(ROUTES.DASHBOARD);
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid = password === '' || email === '';

    return (
        <LoginSignInLayout title="Upword.ly Sign-In" typedText={['Welcome back, Sign in here.']}>
          <form
              className="bg-bg2 shadow-lg rounded px-8 pt-6 pb-8 mb-4"
              data-test="signin-form"
              aria-label="sign-in form"
              onSubmit={e => this.onSubmit(e)}>
            <div className="mb-4">
              <label className="block text-grey-darker text-md mb-2"
                     htmlFor="username">
                Email
              </label>
              <input autoFocus={true}
                     data-test="signin-email"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-bg text-lg"
                     id="email"
                     name="email"
                     type="text"
                     placeholder="Email"
                     value={email}
                     onChange={this.onChange}
                     required
              />
            </div>
            <div className="mb-6">
              <label className="block text-grey-darker text-md mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-bg text-lg"
                     data-test="signin-password"
                     id="password"
                     name="password"
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={this.onChange}
                     required
              />
            </div>
            <div className="flex items-center justify-between">
              <Link href={ROUTES.RESET_PASSWORD} prefetch>
                <a className="inline-block align-baseline font-bold text-md text-blue hover:text-blue-darker underline"
                   href="#" title="reset password">
                  Reset Password
                </a>
              </Link>
              <button
                  disabled={isInvalid}
                  title="sign in"
                  className={
                    isInvalid
                        ? 'bg-blue hover:bg-blue-dark text-gray-600 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-grey-600'
                        : 'bg-blue hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200'
                  }
                  type="submit">
                Sign In
                <FontAwesomeIcon icon={faSignInAlt} title="sign-in button icon" className="mx-2" />
              </button>
            </div>
            {
              !!error && <p className="text-md text-red-300 mt-4">
                Something went wrong. Please refresh or try again later.
              </p>
            }
            <div className="text-center mt-6">
              <Link href={ROUTES.SIGN_UP} prefetch>
                <a className="text-green-200 underline">
                  Create an account
                </a></Link>
            </div>
          </form>
        </LoginSignInLayout>
    );
  }
}

export default SignIn;