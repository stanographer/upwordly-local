import React from 'react';

const Modal = () => {
  return (
      <div
          className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50 top-0 left-0 cursor-pointer" />
        <div className="modal-close absolute top-0 right-0 cursor-pointer mt-2 mr-4 text-white font-bold">[X] Close (or
                                                                                                          Esc)
        </div>
        <div className="z-50 w-5/6 md:w-1/2 md:max-w-md bg-white rounded-lg shadow-2xl mx-2 md:mx-0 p-4">

          <div className="modal-title flex justify-between items-center pb-2">
            <p className="text-2xl font-bold">Simple Modal!</p>
            <div className="modal-close cursor-pointer font-bold text-3xl">x</div>
          </div>

          <div className="modal-body py-4 text-left">
            <p>Modal message can go here</p>
            <p>...</p>
          </div>

          <div className="modal-footer flex justify-end pt-2">
            <button
                className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action
            </button>
            <button className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close
            </button>
          </div>

        </div>
      </div>
  );
};

export default Modal;
