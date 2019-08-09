import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faInfoCircle,
  faSignInAlt,
  faTag,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { NavButton } from '../General';
import Logo from '../Logos/Logo';

const NavLandingNoAuth = () => {
  return (
    <nav
      aria-label="Menu"
      className="flex items-center justify-center md:justify-between flex-wrap bg-bg px-1 sticky"
    >
      <Logo />
      <div className="flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab">
        <div className="lg:flex-grow my-2">
          <NavButton
            icon={<FontAwesomeIcon icon={faInfoCircle} />}
            title="About"
          />
          <NavButton
            icon={<FontAwesomeIcon icon={faBolt} />}
            title="Features"
          />
          <NavButton icon={<FontAwesomeIcon icon={faTag} />} title="Pricing" />
          <NavButton
            icon={<FontAwesomeIcon icon={faUserPlus} />}
            title="Sign Up"
          />
        </div>
        <div className="my-2">
          <NavButton
            icon={<FontAwesomeIcon icon={faSignInAlt} />}
            title="Sign In"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavLandingNoAuth;
