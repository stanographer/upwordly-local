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
      <nav className="flex items-center justify-center mb-10 md:justify-between flex-wrap bg-bg sticky">
        <Logo />
        <div
            className="flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab">
          <div className="lg:flex-grow py-2">
            <Link href={ROUTES.DASHBOARD} prefetch>
              <NavButton
                  icon={<FontAwesomeIcon icon={faTasks} />}
                  title="Dashboard"
              />
            </Link>
            <Link href={ROUTES.ARCHIVE} prefetch>
              <NavButton
                  icon={<FontAwesomeIcon icon={faArchive} />}
                  title="Archive"
              />
            </Link>
            <Link href={ROUTES.BATCH_SCHEDULER} prefetch>
              <NavButton
                  icon={<FontAwesomeIcon icon={faLayerGroup} />}
                  title="Batch Scheduler"
              />
            </Link>
            <Link href={ROUTES.ACCOUNT} prefetch>
              <NavButton
                  icon={<FontAwesomeIcon icon={faUser} />}
                  title="Account"
              />
            </Link>
            <Link href={ROUTES.SETTINGS} prefetch>
            <NavButton
                icon={<FontAwesomeIcon icon={faCog} />}
                title="Settings"
            />
            </Link>
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
