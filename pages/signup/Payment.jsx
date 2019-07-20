import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faCheck } from '@fortawesome/free-solid-svg-icons/index';

const Payment = ({errors, finish, paymentValue, handleInput}) => {
  const errorMessages = errors.map((e, i) => (
      <p className="text-sm text-red-400 mb-4" key={i}>{e}</p>
  ));

  return (
      <form className="bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={e => {
        e.preventDefault();
        finish(e);
      }}>
        <div className="mb-4">
          <label className="block text-grey-darker text-md font-hairline mb-6" htmlFor="username">
            Please select a payment plan.
          </label>
          <div className="inline-block relative w-64">
            <select
                value={paymentValue}
                onChange={e => handleInput(e)}
                name="payment"
                id="payment"
                className="block appearance-none text-bg w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option value="32">Single user: $32 per month</option>
              <option value="59">Agency option: $59 per month</option>
              <option value="0">Admin or Evaluator</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          {
            !!errors
                ? errorMessages
                : ''
          }
          <button
              className="bg-blue w-full hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200"
              type="submit">
            Create Account
            <FontAwesomeIcon icon={faCheck} className="mx-2" />
          </button>
        </div>
      </form>
  );
};

export default Payment;
