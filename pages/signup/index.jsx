import React, { Fragment } from 'react';
import router from 'next/router';
import dynamic from 'next/dynamic';
import { auth, db } from '../../src/firebase';
import * as ROUTES from '../../src/constants/routes';
import LoginSignInLayout from '../../src/components/Layout/LoginSignInLayout';

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

      // Create user in auth.
      auth.doCreateUserWithEmailAndPassword(email, password)
          .then(authUser => {

            // Create user object for account deets in db.
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

                  // Add fullName to displayName in user auth object.
                  // (Yes, it has to be in a separate step -_-.)
                  authUser.user.updateProfile({
                    displayName: fullName,
                  })
                      .then(() => {

                        // Send user a verification email.
                        authUser.user.sendEmailVerification()
                            .then(() => {

                              // Finally, now logged in, reset state and redirect to Dashboard.
                              this.setState(() => ({...INITIAL_STATE}));
                              router.push(ROUTES.DASHBOARD);
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

    // Checks for correct registration token.
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

    // Email validation.
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

        // Checks DB to make sure that there's no duplicate emails.
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

    // Prevents usernames like st@nleySa-Kai.
    // Makes sure passwords are reasonably strong.
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
      });
    }
  };

  componentDidMount() {

    // Load next page in the background for quick redirect.
    router.prefetch(ROUTES.DASHBOARD);
  }

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
        <Fragment>
          <LoginSignInLayout
              title="Upword.ly - Sign Up"
              typedText={['Welcome to Upword.ly', 'Let\'s create you an account.']}>
            {stage()}
          </LoginSignInLayout>
          <script
              async
              defer
              type="text/javascript"
              src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
          />
        </Fragment>
    );
  }
}

export default SignUp;


