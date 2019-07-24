import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/index';

const Token = ({errors, handleInput, nextStep, tokenValue}) => {

  const errorMessages = errors.map((e, i) => (
      <p className="text-sm text-red-400 mb-2" title="errors" key={i}>{e}</p>
  ));

  return (
      <form className="bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={e => {
              e.preventDefault();
              nextStep(tokenValue);
            }}>
        <div className="mb-4">
          <label className="block text-grey-darker text-md font-hairline mb-6" htmlFor="username">
            Please enter your <span className="font-bold">Registration Token</span>.
          </label>
          <input autoFocus={true}
                 autoComplete="off"
                 spellCheck={false}
                 className="shadow-lg appearance-none border rounded w-full py-2 px-3 text-bg font-mono focus:bg-blue-100 text-md tracking-wide"
                 id="token"
                 name="token"
                 type="text"
                 placeholder="Registration Token"
                 value={tokenValue}
                 onChange={e => handleInput(e)}
                 required
          />
        </div>
        {
          !!errors
              ? errorMessages
              : ''
        }
        <div className="flex items-center justify-between">
          <Link href="/signin" prefetch={true}><a className="text-green-200 underline">
            Request a token</a></Link>
          <button
              className="bg-blue hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200"
              type="submit">
            Continue
            <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
          </button>
        </div>
      </form>
  );
};

export default Token;
