import React from 'react';
import Provider from '../../components/Provider';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const NavLogo = dynamic(() => import('../../components/Logos/NavLogo'));
const Typed = dynamic(() => import('react-typed'));

const Login = props => (
    <Provider>
      <Head>
        <title>Sign in to Upword.ly</title>
      </Head>
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-xs mt-20">
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
          <form className="bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-hairline mb-2" htmlFor="username">
                Username
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username"
                     type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-grey-darker text-sm font-hairline mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password"
                     type="password" placeholder="******************" />
            </div>
            <div className="flex items-center justify-between">
              <button
                  className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200"
                  type="button">
                Sign In
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-grey text-xs">
            ©2019 Upword.ly. All rights reserved.
          </p>
        </div>
      </div>
    </Provider>
);

Login.getInitialProps = async function ({pathname, req}) {
  console.log('initial: ', pathname, req);
  return {pathname: req.pathname || pathname};
};

export default Login;


