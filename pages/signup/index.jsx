import React from 'react';
import Provider from '../../components/Provider';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const NavLogo = dynamic(() => import('../../components/Logos/NavLogo'));
const Typed = dynamic(() => import('react-typed'));

// Sign-up components.
const TokenComponent = dynamic(() => import('./Token'));
const UserInfoComponent = dynamic(() => import('./UserInfo'));

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  render() {
    const {step} = this.state;

    return (
        <Provider>
          <Head>
            <title>Sign up for Upword.ly</title>
          </Head>
          <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-xs mt-20">
              <NavLogo center={true} />
              <div className="font-sans font-hairline mb-10 mt-2 text-center justify-center">
                <Typed
                    className="marquee"
                    strings={[
                      'Welcome to Upword.ly.',
                      'Let\'s create you an account.'
                    ]}
                    typeSpeed={40} />
              </div>
              <form className="bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {
                  step === 0
                      ? <TokenComponent />
                      : <UserInfoComponent />
                }
              </form>
              <p className="text-center text-grey text-xs">
                ©2019 Upword.ly. All rights reserved.
              </p>
            </div>
          </div>
        </Provider>
    );
  }
}

export default SignUp;


