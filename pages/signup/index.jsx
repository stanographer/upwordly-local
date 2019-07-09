import React, { Fragment } from 'react';
import Provider from '../../src/components/Session/Provider';
import Head from 'next/head';
import Router, { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
// import { auth, db } from '../../src/firebase';
import { withFirebase } from '../../src/firebase/context';
import * as ROUTES from '../../src/constants/routes';

const NavLogo = dynamic(() => import('../../src/components/Logos/NavLogo'));
const Typed = dynamic(() => import('react-typed'));

// Sign-up components.
const EmailComponent = dynamic(() => import('./Email'));
const NameAndLocation = dynamic(() => import('./NameAndLocation'));
const PaymentComponent = dynamic(() => import('./Payment'));
const TokenComponent = dynamic(() => import('./Token'));
const UserInfoComponent = dynamic(() => import('./UserInfo'));
const ValidFieldComponent = dynamic(() => import('./ValidField'));

const INITIAL_STATE = {
  email: '',
  emailValid: false,
  errors: [],
  formValid: false,
  fullName: '',
  fullNameValid: false,
  location: {},
  locationValid: false,
  password: '',
  passwordValid: false,
  payment: '',
  step: 0,
  token: '',
  tokenValid: false,
  username: '',
  usernameValid: false,
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
    };
  }

  handleInput = e => {

    // Matches the token to the one in the environment variable.
    // Trims and lower-cases. If there's a match, the tokenValid
    // flag is switched to true.
    if (e.target.name === 'token') {
      this.setState({
        [e.target.name]: e.target.value.trim().toLowerCase(),
      });
    } else if (e.target.name === 'email') {
      this.setState({
        email: e.target.value.trim().toLowerCase(),
      });
    } else if (e.target.name === 'username') {
      this.setState({
        username: e.target.value.toLowerCase(),
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmit = e => {
    const {
      email,
      emailValid,
      fullName,
      fullNameValid,
      location,
      locationValid,
      password,
      passwordValid,
      payment,
      token,
      tokenValid,
      username,
      usernameValid,
    } = this.state;

    if (emailValid && fullNameValid && locationValid && passwordValid && tokenValid && usernameValid) {
      auth.doCreateUserWithEmailAndPassword(email, password)
          .then(authUser => {
            db.doCreateUser(
                email,
                fullName,
                JSON.stringify(location),
                authUser.user.uid,
                payment,
                token,
                username,
            )
                .then(() => {
                  this.setState(() => ({...INITIAL_STATE}));
                  Router.push(ROUTES.DASHBOARD);
                })
                .catch(err => this.setState({
                  errors: [
                    ...this.state.errors,
                    err.message,
                  ]
                }));
          })
          .catch(err => this.setState({
            errors: [
              ...this.state.errors,
              err.message,
            ]
          }));
    }

    e.preventDefault();
  };

  validateStepZero = token => {
    if (token === process.env.REGISTRATION_TOKEN.trim().toLowerCase()) {
      this.setState({
        errors: [],
        step: this.state.step += 1,
        tokenValid: true,
      });
    } else {
      this.setState({
        errors: [
          'Sorry. Your token is invalid.'
        ]
      });
    }
  };

  validateStepOne = () => {
    const {
      fullName,
      location,
    } = this.state;

    const re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

    if (!fullName.match(re)) {
      this.setState({
        errors: [
          ...this.state.errors,
          'Your name can only contain alphanumeric characters.',
        ]
      });
    } else if (location.description === undefined) {
      this.setState({
        errors: [
          ...this.state.errors,
          'Select the closest matching location.'
        ]
      });
    } else {
      this.setState({
        errors: [],
        fullNameValid: true,
        locationValid: true,
        step: this.state.step += 1
      });
    }
  };

  validateStepTwo = email => {
    try {

      // Regex to make sure that emails have @ signs and all that.
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      // Testing to see if the email matches the regex.
      if (!re.test(String(email).trim().toLowerCase())) {
        this.setState({
          errors: [
            'Your email is badly formatted.'
          ]
        });
      } else {

        // Makes sure that there's no duplicate emails.
        db.checkDupeEmail(email, dupe => {
          if (dupe === true) {
            this.setState({
              errors: [
                'An account with this email address already exists.'
              ]
            });
          } else {
            this.setState({
              emailValid: true,
              errors: [],
              step: this.state.step += 1,
            });
          }
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  validateStepThree = (username, password) => {
    const usernameRe = /^[a-zA-Z0-9_-]+$/;
    const passwordRe = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!username.match(usernameRe)) {
      this.setState({
        errors: [
          ...this.state.errors,
          'Your username may only contain lowercase letters, numbers, hyphens, and underscores.'
        ]
      });
    } else if (!password.match(passwordRe)) {
      this.setState({
        errors: [
          ...this.state.errors,
          'Your password needs at minimum eight characters, at least one letter, one number, and one special character.'
        ]
      });
    } else {
      db.checkDupeUsername(username.trim().toLowerCase(), dupe => {
        if (dupe === true) {
          this.setState({
            errors: [
              'This username is already taken.'
            ]
          });
        } else {
          this.setState({
            errors: [],
            step: this.state.step += 1,
            usernameValid: true,
            passwordValid: true,
          });
        }
      })
    }
  };

  render() {
    const {
      email,
      errors,
      fullName,
      location,
      password,
      payment,
      step,
      token,
      username,
    } = this.state;

    const stage = () => {
      switch (step) {
        case 0:
          return (
              <TokenComponent
                  errors={errors}
                  tokenValue={token}
                  handleInput={this.handleInput}
                  nextStep={this.validateStepZero}
              />
          );
        case 1:
          return (
              <Fragment>
                <ValidFieldComponent
                    message={`Your registration token "${token}" is valid.`}
                />
                <NameAndLocation
                    errors={errors}
                    fullNameValue={fullName}
                    handleInput={this.handleInput}
                    locationValue={location}
                    nextStep={this.validateStepOne}
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
                    message={`Nice to meet you, ${fullName}! I hear the weather is great in ${location.description}!`}
                />
                <EmailComponent
                    emailValue={email}
                    errors={errors}
                    handleInput={this.handleInput}
                    nextStep={this.validateStepTwo}
                />
              </Fragment>
          );
        case 3:
          return (
              <Fragment>
                <ValidFieldComponent
                    message={`Your registration token "${token}" is valid.`}
                />
                <ValidFieldComponent
                    message={`Nice to meet you, ${fullName}! I hear the weather is great in ${location.description}!`}
                />
                <ValidFieldComponent
                    message={`${email} is a valid and available email address.`}
                />
                <UserInfoComponent
                    errors={errors}
                    handleInput={this.handleInput}
                    passwordValue={password}
                    usernameValue={username}
                    nextStep={this.validateStepThree}
                />
              </Fragment>
          );
        case 4:
          return (
              <Fragment>
                <ValidFieldComponent
                    message={`Your registration token "${token}" is valid.`}
                />
                <ValidFieldComponent
                    message={`Nice to meet you, ${fullName}! I hear the weather is great in ${location.description}!`}
                />
                <ValidFieldComponent
                    message={`${email} is a valid and available email address.`}
                />
                <ValidFieldComponent
                    message={`${username} is a valid and available username!`}
                />
                <ValidFieldComponent
                    message={`Nice and strong password!`}
                />
                <PaymentComponent
                    errors={errors}
                    handleInput={this.handleInput}
                    paymentValue={payment}
                    finish={this.handleSubmit}
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
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
            />
          </Head>
          <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-sm mt-20">
              <NavLogo center={true} />
              <div className="font-sans mb-10 mt-2 text-center justify-center">
                <Typed
                    className="marquee"
                    strings={[
                      'Welcome to Upword.ly.',
                      'Let\'s create you an account.',
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

export default withFirebase(withRouter(SignUp));


