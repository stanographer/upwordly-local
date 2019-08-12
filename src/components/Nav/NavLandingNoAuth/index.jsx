import React from 'react';
import { useRouter } from 'next/router';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import PropTypes from 'prop-types';
import NavOptions from './NavOptions';
import { SIGN_IN } from '../../../constants/routes';

const NavLandingNoAuth = ({ atTop, destination, fullpageApi }) => {
  const router = useRouter();

  const menuOnChange = event => {
    if (event.value === 'signIn') {
      router.push(SIGN_IN);
    }
    fullpageApi.moveTo(event.value);
  };

  return (
    <nav
      aria-label="Menu"
      className={`flex
        items-center
        justify-center
        md:justify-between
        ${atTop ? 'landing-menu' : 'landing-menu-transition'}
        flex-wrap
        px-1
        fixed
        sticky`}
      style={{
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        className="flex
        w-full
        flex-grow
        content-center
        justify-center
        md:w-1/2
        tab"
      >
        <div className="flex my-2">
          <Dropdown
            controlClassName={`text-green-200 border-0 font-mono ${
              atTop ? 'landing-menu' : 'landing-menu-transition'
            }`}
            menuClassName="bg-bg2 text-green-200"
            placeholderClassName="text-green-200"
            onChange={e => menuOnChange(e)}
            options={NavOptions}
            value={destination}
          />
        </div>
      </div>
    </nav>
  );
};

NavLandingNoAuth.propTypes = {
  atTop: PropTypes.bool.isRequired,
  destination: PropTypes.string.isRequired,
  fullpageApi: PropTypes.PropTypes.shape({ version: PropTypes.number })
    .isRequired,
};

export default NavLandingNoAuth;
