import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import LoginSignInLayout from '../../src/components/Layout/LoginSignInLayout';
import { SIGN_IN } from '../../src/constants/routes';
import { doPasswordReset } from '../../src/firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  return (
    <LoginSignInLayout
      title="Upword.ly - Reset Password"
      typedText={['Forgot your password?', 'Reset it here.']}
    >
      <form
        className="bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={e => {
          e.preventDefault();
          doPasswordReset(email)
            .then(() => {
              setMessage(
                'A password reset link has been sent to the supplied email address.',
              );
              setError('');
              setTimeout(
                () =>
                  Router.push({
                    pathname: SIGN_IN,
                  }),
                5000,
              );
            })
            .catch(err => setError(err.message));
        }}
      >
        <div className="mb-4">
          <label
            className="block text-grey-darker text-md font-hairline mb-6"
            htmlFor="username"
          >
            Please enter the{' '}
            <span className="font-bold text-green-200">email address</span> with
            which you registered to reset your password.
          </label>
          <input
            autoComplete="off"
            spellCheck={false}
            title="email address input"
            className="shadow-lg
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-bg
            font-mono
            focus:bg-blue-100
            text-md
            tracking-wide"
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            value={email || ''}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        {error ? (
          <p className="text-sm text-red-200 mb-2" title="error">
            {error}
          </p>
        ) : (
          ''
        )}
        {message ? (
          <p className="text-sm text-green-200 mb-2" title="message">
            {message}
          </p>
        ) : (
          ''
        )}
        <div className="flex items-center justify-between">
          <Link href={SIGN_IN} prefetch>
            <a className="text-green-200 underline">Forgot email</a>
          </Link>
          <button
            title="Reset Password submit button"
            className="bg-blue
            hover:bg-blue-dark
            text-teal-200
            font-bold
            py-2
            px-4
            rounded
            border-white
            hover:border-transparent
            hover:text-bg
            hover:bg-teal-200"
            type="submit"
          >
            Reset Password
            <FontAwesomeIcon
              icon={faUnlock}
              title="unlock icon"
              className="mx-2"
            />
          </button>
        </div>
      </form>
    </LoginSignInLayout>
  );
};

export default ForgotPassword;
