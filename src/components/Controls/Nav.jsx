import React from 'react';
import { NavButton } from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import {
  faAdjust,
  faAlignJustify,
  faFillDrip,
  faFont,
  faShareAlt,
  faTextHeight,
} from '@fortawesome/free-solid-svg-icons/index';
import WidgetContext from '../../context/widget-context';
import NavLogo from '../Logos/NavLogo';

const icons = {
  colors: <FontAwesomeIcon icon={faFillDrip} />,
  lightDarkMode: <FontAwesomeIcon icon={faAdjust} />,
  font: <FontAwesomeIcon icon={faFont} />,
  fontSize: <FontAwesomeIcon icon={faTextHeight} />,
  share: <FontAwesomeIcon icon={faShareAlt} />,
  text: <FontAwesomeIcon icon={faAlignJustify} />,
};

const Nav = () => {
  return (
      <WidgetContext.Consumer>
        {context => (
            <nav className="flex items-center justify-center md:justify-between flex-wrap bg-bg px-1 py-4 md:py-6 sticky">
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
                      icon={icons.share}
                      title="Share"
                      onClick={e => {
                        e.preventDefault();
                        context.openWidget('share');
                      }}
                  />
                </div>
              </div>
            </nav>
        )}
      </WidgetContext.Consumer>
  );
};

export default Nav;
