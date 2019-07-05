import React from 'react';
import PropTypes from 'prop-types';

const NavButton = ({icon, title, onClick}) => {
  return (
      <a href="#"
         onClick={onClick}
         className="
         inline-block
         text-md
         mt-2
         mx-0
         px-3
         py-2
         sm:px-4
         sm:py-2
         md:mx-3
         md:mt-1
         lg:mt-0
         leading-none
         border-none
         rounded
         text-teal-200
         border-white
         hover:border-transparent
         hover:text-bg
         hover:bg-teal-200
         ">
        {icon}{ title ? <span className="ml-2">{title}</span> : ''}
      </a>
  );
};

NavButton.propTypes = {
  icon: PropTypes.object,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default NavButton;
