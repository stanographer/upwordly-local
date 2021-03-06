import React from 'react';
import { NavButton } from '../General';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAdjust,
  faAlignJustify,
  faFillDrip,
  faFont,
  faShareAlt,
  faTextHeight,
} from '@fortawesome/free-solid-svg-icons';
import WidgetContext from '../../providers/WidgetContext';
import Logo from '../Logos/Logo';

const icons = {
  colors: <FontAwesomeIcon icon={faFillDrip} />,
  lightDarkMode: <FontAwesomeIcon icon={faAdjust} />,
  font: <FontAwesomeIcon icon={faFont} />,
  fontSize: <FontAwesomeIcon icon={faTextHeight} />,
  share: <FontAwesomeIcon icon={faShareAlt} />,
  text: <FontAwesomeIcon icon={faAlignJustify} />,
};

const NavTranscriptView = () => {
  return (
      <WidgetContext.Consumer>
        {context => (
            <nav aria-label="Menu"
                 role="menu"
                className="flex items-center justify-center md:justify-between flex-wrap bg-bg px-1 sticky">
              <Logo />
              <div className="flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab">
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

export default NavTranscriptView;
