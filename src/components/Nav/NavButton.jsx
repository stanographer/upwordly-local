import React from 'react';
import PropTypes from 'prop-types';

const NavButton = ({active, icon, title, onClick}) => {
  return (
      <a href="#"
         data-test="nav-button"
         title={title}
         onClick={onClick}
         className={
           active
               ? 'inline-block mt-2 mx-0 px-3 py-2 sm:px-4 sm:py-2 md:mx-3 md:mt-1 lg:mt-0 leading-none border-none rounded text-green-200 font-bold border-white hover:border-transparent hover:text-bg hover:bg-green-200 underline tracking-wide'
               : 'inline-block mt-2 mx-0 px-3 py-2 sm:px-4 sm:py-2 md:mx-3 md:mt-1 lg:mt-0 leading-none border-none rounded text-teal-200 border-white hover:border-transparent hover:text-bg hover:bg-teal-200 tracking-wide'
         }>
        {icon}{title ? <span className="ml-2 hidden md:inline-block" data-test="nav-button-text">{title}</span> : ''}
      </a>
  );
};

//'inline-block mt-2 mx-0 px-3 py-2 sm:px-4 sm:py-2 md:mx-3 md:mt-1 lg:mt-0 leading-none border-none rounded text-bg font-bold bg-teal-200 border-white hover:border-transparent hover:text-bg hover:bg-green-200'

NavButton.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default NavButton;
