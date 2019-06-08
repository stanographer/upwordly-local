import React from 'react';

const Nav = () => {
  return (
      <nav className="flex items-center justify-between flex-wrap bg-bg p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img style={{width: '2rem', margin: '0 1rem'}} src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EMissile%3C/title%3E%3Cdesc%3EA line styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer2' d='M11.1 47.3C5.4 50 1.7 54.9 2 62c7.1.4 12-3.4 14.7-9.1' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/path%3E%3Cpath data-name='layer1' d='M62 2s-13.4-.7-22.6 8.5S8.3 44.4 8.3 44.4l11.3 11.4s24.7-22 33.9-31.2S62 2 62 2z' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/path%3E%3Ccircle data-name='layer2' cx='44' cy='20' r='4' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/circle%3E%3Cpath data-name='layer1' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.6 38.5l12 11.9M24.8 26H12.5l-7.7 7.7 11 2.3M37 40.2v12.3l-7.7 7.6L27 49.2'%3E%3C/path%3E%3C/svg%3E" alt="Missile" />
          <span className="font-semibold text-xl tracking-tight">Upwordly</span>
        </div>
        <div className="block lg:hidden">
          <button
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header"
               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Docs
            </a>
            <a href="#responsive-header"
               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Examples
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Blog
            </a>
          </div>
          <div>
            <a href="#"
               className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
          </div>
        </div>
      </nav>
  );
};

export default Nav;
