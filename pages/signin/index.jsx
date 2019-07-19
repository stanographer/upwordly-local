import React, { Component } from 'react';
import Provider from '../../src/components/Session/Provider';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../src/firebase';
import * as ROUTES from '../../src/constants/routes';
import Footer from '../../src/components/General/Footer';

const Logo = dynamic(() => import('../../src/components/Logos/Logo'));
const Typed = dynamic(() => import('react-typed'));

const SignIn = () => (
    <div>
      <SignInComponent />
    </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = e => {
    const {
      email,
      password
    } = this.state;

    e.preventDefault();

    try {
      auth.doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({...INITIAL_STATE});
            router.push(ROUTES.DASHBOARD);
          })
          .catch(error => {
            this.setState({error});
          });
    } catch (err) {
      this.setState({err});
    }
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {
      email,
      password,
      error
    } = this.state;

    const isInvalid = password === '' || email === '';

    return (
        <Provider>
          <Head>
            <title>Sign in to Upword.ly</title>
          </Head>
          <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-sm mt-20">
              <Logo center={true} />
              <div className="font-sans font-hairline mb-10 mt-2 text-center justify-center">
                <Typed
                    className="marquee"
                    strings={[
                      'Welcome back.',
                      'Sign in here.'
                    ]}
                    typeSpeed={40} />
              </div>
              <form className="bg-bg2 shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={e => this.onSubmit(e)}>
                <div className="mb-4">
                  <label className="block text-grey-darker text-md font-hairline mb-2"
                         htmlFor="username">
                    Email
                  </label>
                  <input autoFocus={true}
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
                  <label className="block text-grey-darker text-md font-hairline mb-2"
                         htmlFor="password">
                    Password
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-bg text-lg"
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
                  <a className="inline-block align-baseline font-bold text-md text-blue hover:text-blue-darker underline"
                     href="#">
                    Forgot Password?
                  </a>
                  <button
                      disabled={isInvalid}
                      className="bg-blue hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200"
                      type="submit">
                    Sign In
                    <FontAwesomeIcon icon={faSignInAlt} className="mx-2" />
                  </button>
                </div>
                {
                  error && <p>{error.message}</p>
                }
                <div className="text-center mt-6">
                  <Link href="/signup" prefetch><a className="text-green-200 underline">
                    Create an account
                  </a></Link>
                </div>
              </form>
              <Footer />
            </div>
          </div>
        </Provider>
    );
  }
}

export default SignIn;