import React, { Fragment } from 'react';
import Provider from '../../components/Provider';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import ValidField from './ValidField';

const NavLogo = dynamic(() => import('../../components/Logos/NavLogo'));
const Typed = dynamic(() => import('react-typed'));

// Sign-up components.
const EmailComponent = dynamic(() => import('./Email'));
const TokenComponent = dynamic(() => import('./Token'));
const UserInfoComponent = dynamic(() => import('./UserInfo'));
const ValidFieldComponent = dynamic(() => import('./ValidField'));

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailValid: false,
      password: '',
      step: 0,
      token: '',
      tokenValid: false,
      username: '',
    };
  }

  handleInput = e => {

    // Matches the token to the one in the environment variable.
    // Trims and lower-cases. If there's a match, the tokenValid
    // flag is switched to true.
    if (
        e.target.name === 'token' &&
        e.target.value.trim().toLowerCase() === process.env.REGISTRATION_TOKEN.trim().toLowerCase()
    ) {
      this.setState({
        [e.target.name]: e.target.value.trim().toLowerCase(),
        tokenValid: true,
      });
    } else if (e.target.name === 'email') {
      this.setState({
        email: e.target.value.trim().toLowerCase(),
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(email).trim().toLowerCase())) {
      this.setState({
        emailValid: true,
        step: this.state.step += 1,
      });
    }

  };

  verifyTokenAndContinue = () => {
    const {tokenValid} = this.state;

    if (tokenValid) {
      this.setState({
        step: this.state.step += 1,
      });
    }
  };

  render() {
    const {
      email,
      password,
      step,
      token,
      tokenValid,
      username,
    } = this.state;

    const stage = () => {
      switch (step) {
        case 0:
          return <TokenComponent
              tokenValue={token}
              handleInput={this.handleInput}
              nextStep={this.verifyTokenAndContinue}
              tokenValid={tokenValid}
          />;
        case 1:
          return (
              <Fragment>
                <ValidFieldComponent
                    message={`Your registration token "${token}" is valid.`}
                />
                <EmailComponent
                    emailValue={email}
                    handleInput={this.handleInput}
                    nextStep={this.validateEmail}
                    tokenValid={tokenValid}
                />
              </Fragment>
          );
        case 2:
          return (
              <Fragment>
                <ValidFieldComponent
                    message={`Your registration token "${token}" is valid.`}
                />
                <ValidFieldComponent
                    message={`${email} is a valid and available email address.`}
                />
                <UserInfoComponent
                    handleInput={this.handleInput}
                    passwordValue={password}
                    usernameValue={username}
                />
              </Fragment>
          );
        default:
          break;
      }
    };

    return (
        <Provider>
          <Head>
            <title>Create an Upword.ly account</title>
          </Head>
          <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-sm mt-20">
              <NavLogo center={true} />
              <div className="font-sans mb-10 mt-2 text-center justify-center">
                <Typed
                    className="marquee"
                    strings={[
                      'Welcome to Upword.ly.',
                      'Let\'s create you an account.'
                    ]}
                    typeSpeed={40} />
              </div>

              {stage()}

              <p className="text-center text-grey text-xs mt-10">
                ©2019 Upword.ly. All rights reserved.
              </p>
            </div>
          </div>
        </Provider>
    );
  }
}

export default SignUp;


