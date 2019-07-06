import React from 'react';
import Link from 'next/link';

const Token = ({handleInput, nextStep, tokenValue, tokenValid}) => {
  return (
      <form className="bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={nextStep(tokenValue)}>
        <div className="mb-4">
          <label className="block text-grey-darker text-md font-hairline mb-6" htmlFor="username">
            Please enter your <strong>Registration Token</strong>.
          </label>
          <input autoFocus={true}
                 autoComplete="off"
                 spellCheck={false}
                 className="shadow-lg appearance-none border rounded w-full py-2 px-3 text-bg font-mono focus:bg-blue-100  text-md tracking-wide"
                 id="token"
                 name="token"
                 type="text"
                 placeholder="Registration Token"
                 value={tokenValue}
                 onChange={e => handleInput(e)}
                 required
          />
        </div>
        <div className="flex items-center justify-end">
          <Link href="/signin" prefetch={true} withData><a className="text-green-200 underline">
            Request a token</a></Link>
        </div>
      </form>
  );
};

export default Token;
