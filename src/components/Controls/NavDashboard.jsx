import React from 'react';
import { NavButton } from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import {
  faCog,
  faSignOutAlt,
  faTasks,
  faUser,
} from '@fortawesome/free-solid-svg-icons/index';
import WidgetContext from '../../context/widget-context';
import NavLogo from '../Logos/NavLogo';
import router from 'next/router';
import { doSignOut } from '../../firebase/auth';
import * as ROUTES from '../../constants/routes';

const NavDashboard = ({setActive}) => {
  return (
      <nav className="flex items-center justify-center mb-10 md:justify-between flex-wrap bg-bg px-1 py-4 md:py-6 sticky">
        <NavLogo />
        <div className="flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab">
          <div className="lg:flex-grow my-2">
            <NavButton
                icon={<FontAwesomeIcon icon={faTasks} />}
                title="Dashboard"
                onClick={e => {
                  e.preventDefault();
                  setActive(0);
                }}
            />
            <NavButton
                icon={<FontAwesomeIcon icon={faUser} />}
                title="My Account"
                onClick={e => {
                  e.preventDefault();
                  setActive(1);
                }}
            />
            <NavButton
                icon={<FontAwesomeIcon icon={faCog} />}
                title="Settings"
                onClick={e => {
                  e.preventDefault();
                  setActive(2);
                }}
            />
          </div>
          <div className="my-2">
            <NavButton
                icon={<FontAwesomeIcon icon={faSignOutAlt} />}
                title="Sign out"
                onClick={e => {
                  e.preventDefault();
                  doSignOut().then(() => router.push(ROUTES.SIGN_IN));
                }}
            />
          </div>
        </div>
      </nav>
  );
};

export default NavDashboard;
