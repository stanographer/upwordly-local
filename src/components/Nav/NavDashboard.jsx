// NavTranscriptView component shown to the logged-in user.

import React from 'react';
import router from 'next/router';
import { NavButton } from '../General';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArchive,
  faCog,
  faLayerGroup,
  faSignOutAlt,
  faTasks,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logos/Logo';
import { doSignOut } from '../../firebase/auth';
import * as ROUTES from '../../constants/routes';
import Link from 'next/link';

// TODO: Muting error, fix as soon as zeit/next.js/issues/7915 resolved.

const originalError = console.error;

console.error = (...args) => {
  if (/Warning.*Function components cannot be given refs/.test(args[0])) {
    return;
  }
  originalError.call(console, ...args);
};

const NavDashboard = ({active}) => {
  return (
      <nav className="flex items-center justify-center mb-10 md:justify-between flex-wrap bg-bg sticky"
      data-test="nav-dashboard">
        <Logo />
        <div className="flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab">
          <div className="lg:flex-grow py-2">
            <Link href={ROUTES.DASHBOARD} prefetch>
              <NavButton
                  active={active === 'dashboard'}
                  icon={<FontAwesomeIcon icon={faTasks} />}
                  title="Dashboard"
              />
            </Link>
            <Link href={ROUTES.ARCHIVE} prefetch>
              <NavButton
                  active={active === 'archive'}
                  icon={<FontAwesomeIcon icon={faArchive} />}
                  title="Archive"
              />
            </Link>
            <Link href={ROUTES.BATCH_SCHEDULER} prefetch>
              <NavButton
                  active={active === 'batch-scheduler'}
                  icon={<FontAwesomeIcon icon={faLayerGroup} />}
                  title="Batch Scheduler"
              />
            </Link>
            <Link href={ROUTES.ACCOUNT} prefetch>
              <NavButton
                  active={active === 'account'}
                  icon={<FontAwesomeIcon icon={faUser} />}
                  title="Account"
              />
            </Link>
            <Link href={ROUTES.SETTINGS} prefetch>
            <NavButton
                active={active === 'settings'}
                icon={<FontAwesomeIcon icon={faCog} />}
                title="Settings"
            />
            </Link>
          </div>
          <div className="my-2 flex flex-wrap">
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
