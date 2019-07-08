import React, { useState } from 'react';
import Provider from '../../components/Provider';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../src/firebase';
import * as ROUTES from '../../routes';

const NavLogo = dynamic(() => import('../../components/Logos/NavLogo'));
const Typed = dynamic(() => import('react-typed'));

const SignIn = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  return (
      <Provider>
        <Head>
          <title>Sign in to Upword.ly</title>
        </Head>
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
          <div className="w-full max-w-sm mt-20">
            <NavLogo center={true} />
            <div className="font-sans font-hairline mb-10 mt-2 text-center justify-center">
              <Typed
                  className="marquee"
                  strings={[
                    'Welcome back.',
                    'Sign in here.'
                  ]}
                  typeSpeed={40} />
            </div>
            <form className="bg-bg2 shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={e => {
              e.preventDefault();
              auth.doSignInWithEmailAndPassword(email, password)
                  .then(Router.push(ROUTES.DASHBOARD));
            }}>
              <div className="mb-4">
                <label className="block text-grey-darker text-md font-hairline mb-2"
                       htmlFor="username">
                  Email
                </label>
                <input autoFocus={true}
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-bg"
                       id="email"
                       name="email"
                       type="email"
                       placeholder="Email"
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                       required
                />
              </div>
              <div className="mb-6">
                <label className="block text-grey-darker text-md font-hairline mb-2"
                       htmlFor="password">
                  Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-bg"
                       id="password"
                       name="password"
                       type="password"
                       placeholder="Password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                       required
                />
              </div>
              <div className="flex items-center justify-between">
                <a className="inline-block align-baseline font-bold text-md text-blue hover:text-blue-darker underline"
                   href="#">
                  Forgot Password?
                </a>
                <button
                    className="bg-blue hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200"
                    type="submit">
                  Sign In
                  <FontAwesomeIcon icon={faSignInAlt} className="mx-2" />
                </button>
              </div>
              <div className="text-center mt-6">
                <Link href="/signup" prefetch={true}><a className="text-green-200 underline">Create an
                                                                                             account</a></Link>
              </div>
            </form>
            <p className="text-center text-grey text-xs mt-10">
              ©2019 Upword.ly. All rights reserved.
            </p>
          </div>
        </div>
      </Provider>
  );
};

export default SignIn;