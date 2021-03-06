import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/index';

const UserInfo = ({errors, handleInput, nextStep, passwordValue, usernameValue}) => {
  const errorMessages = errors.map((e, i) => (
      <p className="text-sm text-red-400 mb-4" key={i}>{e}</p>
  ));

  return (
      <form className="bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={e => {
        e.preventDefault();
        nextStep(usernameValue, passwordValue);
      }}>
        <div className="mb-4">
          <p className="text-sm mb-4">Now create a username that is unique, all lowercase, and simple.</p>
          <p className="text-sm mb-4">Live transcript links you share will contain your username so making it
                                      unnecessarily long or complex will make your URLs harder to remember and more prone to typos.</p>
          <p className="text-sm mb-4">Links look like this. The portion of the url that contains your username is
                                      highlighted in red: <a href="https://upword.ly/stanley/coachella-2019"
                                                             className="text-green-200 underline">upword.ly/<span
                className="text-red-300">{usernameValue || 'stanley'}</span>/coachella-2019</a></p>
          <label className="block text-grey-darker text-md mb-2" htmlFor="username">
            Username
          </label>
          <input autoComplete="off"
                 spellCheck={false}
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-bg focus:bg-blue-100 text-md font-mono tracking-wide"
                 id="username"
                 name="username"
                 type="text"
                 placeholder="Username"
                 value={usernameValue}
                 onChange={e => handleInput(e)}
                 required
          />
        </div>
        <div className="mb-6">
          <label className="block text-grey-darker text-md mb-2"
                 htmlFor="password">
            Password
          </label>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg text-md font-mono tracking-wide"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={passwordValue}
              onChange={e => handleInput(e)}
              required
          />
        </div>
        {
          !!errors
              ? errorMessages
              : ''
        }
        <button
            className="bg-blue w-full hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200"
            type="submit">
          Continue
          <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
        </button>
      </form>
  );
};

export default UserInfo;
