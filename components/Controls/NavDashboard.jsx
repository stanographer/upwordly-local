import React from 'react';
import { NavButton } from '../../components/Controls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAdjust,
  faAlignJustify,
  faFillDrip,
  faFont,
  faSignOutAlt,
  faShareAlt,
  faTextHeight,
} from '@fortawesome/free-solid-svg-icons';
import WidgetContext from '../../context/widget-context';
import NavLogo from '../Logos/NavLogo';
import dynamic from 'next/dynamic';
import Router, {withRouter} from 'next/router';
import { doSignOut } from '../../src/firebase/auth';
import * as ROUTES from '../../routes';

const icons = {
  colors: <FontAwesomeIcon icon={faFillDrip} />,
  lightDarkMode: <FontAwesomeIcon icon={faAdjust} />,
  font: <FontAwesomeIcon icon={faFont} />,
  fontSize: <FontAwesomeIcon icon={faTextHeight} />,
  share: <FontAwesomeIcon icon={faShareAlt} />,
  signOut: <FontAwesomeIcon icon={faSignOutAlt} />,
  text: <FontAwesomeIcon icon={faAlignJustify} />,
};

const NavDashboard = () => {
  return (
      <WidgetContext.Consumer>
        {context => (
            <nav
                className="flex items-center justify-center md:justify-between flex-wrap bg-bg px-1 py-4 md:py-6 sticky">
              <NavLogo />
              <div className="
        flex
        w-full
        flex-grow
        content-center
        justify-center
        md:w-1/2
        md:content-left
        md:justify-start
        tab">
                <div className="lg:flex-grow my-2">
                  <NavButton
                      icon={icons.font}
                      title="Font"
                      onClick={e => {
                        e.preventDefault();
                        context.openWidget('font');
                      }}
                  />
                  <NavButton
                      icon={icons.text}
                      title="Text"
                      onClick={e => {
                        e.preventDefault();
                        context.openWidget('text');
                      }}
                  />
                  <NavButton
                      icon={icons.colors}
                      title="Colors"
                      onClick={e => {
                        e.preventDefault();
                        context.openWidget('color');
                      }}
                  />
                </div>
                <div className="my-2">
                  <NavButton
                      icon={icons.signOut}
                      title="Sign out"
                      onClick={e => {
                        e.preventDefault();
                        doSignOut().then(() => Router.push(ROUTES.LANDING));
                      }}
                  />
                </div>
              </div>
            </nav>
        )}
      </WidgetContext.Consumer>
  );
};

export default withRouter(NavDashboard);
