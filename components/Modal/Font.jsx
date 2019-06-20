import React from 'react';

const Font = () => {
  return (
      <div>
        <div>
          <label className="block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2"
                 htmlFor="grid-last-name">
            Size
          </label>
          <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-w-0"
              id="grid-last-name" type="text" placeholder="Doe" />
        </div>
        <div className="flex flex-grow-1 my-8">
          <label className="block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2"
                 htmlFor="grid-last-name">
            Style
          </label>

        </div>
      </div>
  );
};

export default Font;
