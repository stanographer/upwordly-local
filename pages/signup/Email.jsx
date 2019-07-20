import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/index';

const Email = ({emailValue, errors, handleInput, nextStep}) => {
  const errorMessages = errors.map((e, i) => (
      <p className="text-sm text-red-400 mb-4" key={i}>{e}</p>
  ));

  return (
      <form className="bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={e => {
        e.preventDefault();
        nextStep(emailValue);
      }}>
        <div className="mb-4">
          <label className="block text-grey-darker text-md font-hairline mb-6" htmlFor="username">
            Please enter your <strong>email address</strong>.
          </label>
          <input autoFocus={true}
                 autoComplete="off"
                 spellCheck={false}
                 className="shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md"
                 id="email"
                 name="email"
                 type="email"
                 placeholder="Email address"
                 value={emailValue}
                 onChange={e => handleInput(e)}
                 required
          />
        </div>
        {
          !!errors
              ? errorMessages
              : ''
        }
        <div className="flex items-center justify-end">
          <button
              className="bg-blue w-full hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200"
              type="submit">
            Continue
            <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
          </button>
        </div>
      </form>
  );
};

export default Email;
