import React from 'react';
import Provider from '../Session/Provider';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const NavLogo = dynamic(() => import('../Logos/NavLogo'));

const NeedsAuth = () => {
  return (
      <Provider>
        <Head>
          <title>Sign-in required to view page.</title>
        </Head>
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
          <div className="w-full max-w-sm mt-20">
            <NavLogo center={true} />
            <div className="font-sans font-hairline mb-12 mt-12 text-center">
              <h1>Sorry. You must be signed in to view this page.</h1>
              <p className="mt-2"><Link href="/signin" prefetch={true}><a className="text-green-200 underline">
                Click here</a></Link> to sign in.
              </p>
            </div>
            <p className="text-center text-grey text-xs">
              ©2019 Upword.ly. All rights reserved.
            </p>
          </div>
        </div>
      </Provider>
  );
};

export default NeedsAuth;


