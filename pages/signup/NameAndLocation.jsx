import React from 'react';
import dynamic from 'next/dynamic';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GeoSuggest = dynamic(() => import('react-geosuggest'));

const NameAndLocation = ({errors, fullNameValue, handleInput, locationValue, nextStep}) => {
  const errorMessages = errors.map((e, i) => (
      <p className="text-sm text-red-400 mb-4" key={i}>{e}</p>
  ));

  return (
      <form className="bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={e => {
              e.preventDefault();
              nextStep(e);
            }}>
        <div className="mb-4">
          <p className="text-sm mb-4">
            Please enter the name by which you'd like to be called. First and last is great; just first is fine, too!
          </p>
          <label className="block text-grey-darker text-md mb-2"
                 htmlFor="fullName">
            Full Name
          </label>
          <input autoFocus={true}
                 autoComplete="off"
                 spellCheck={false}
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-bg focus:bg-blue-100 text-md font-mono tracking-wide"
                 id="fullName"
                 name="fullName"
                 type="text"
                 placeholder="Full Name"
                 value={fullNameValue}
                 onChange={e => handleInput(e)}
                 required
          />
        </div>
        <div className="mb-6">
          <label className="block text-grey-darker text-md mb-2"
                 htmlFor="location">
            Location
          </label>
          <GeoSuggest
              className="shadow bg-white appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg text-md font-mono tracking-wide"
              id="location"
              name="location"
              placeholder="Location"
              autoComplete="off"
              value={locationValue}
              style={{
                'input': {
                  backgroundColor: '#fff',
                  width: '100%',
                },
                'suggests': {
                  color: '#718096',
                  backgroundColor: '#fff',
                },
                'suggestItem': {
                  backgroundColor: '#fff',
                }
              }}
              onSuggestSelect={val => handleInput({
                target: {
                  name: 'location',
                  value: val,
                  type: 'input',
                }
              })}
              highlightMatch={true}
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

export default NameAndLocation;
