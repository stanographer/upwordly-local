// Nav component shown to the logged-in user.

import React from 'react';
import router from 'next/router';
import { NavButton } from '../General';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import {
  faArchive,
  faCog,
  faLayerGroup,
  faSignOutAlt,
  faTasks,
  faUser,
} from '@fortawesome/free-solid-svg-icons/index';
import Logo from '../Logos/Logo';
import { doSignOut } from '../../firebase/auth';
import * as ROUTES from '../../constants/routes';
import Link from 'next/link';

const NavDashboard = ({active, setActive}) => {
  return (
      <nav className="flex items-center justify-center mb-10 md:justify-between flex-wrap bg-bg px-1 sticky">
        <Logo />
        <div
            className="flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab">
          <div className="lg:flex-grow py-2">
            <Link href={ROUTES.DASHBOARD} prefetch>
              <NavButton
                  active={active === 0}
                  icon={<FontAwesomeIcon icon={faTasks} />}
                  title="Dashboard"
              />
            </Link>
            <Link href={ROUTES.ARCHIVE} prefetch>
              <NavButton
                  active={active === 4}
                  icon={<FontAwesomeIcon icon={faArchive} />}
                  title="Archive"
              />
            </Link>
            <NavButton
                active={active === 5}
                icon={<FontAwesomeIcon icon={faLayerGroup} />}
                title="Batch Jobs"
                onClick={e => {
                  e.preventDefault();
                  setActive(5);
                }}
            />
            <NavButton
                active={active === 1}
                icon={<FontAwesomeIcon icon={faUser} />}
                title="My Account"
                onClick={e => {
                  e.preventDefault();
                  setActive(1);
                }}
            />
            <NavButton
                active={active === 2}
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
