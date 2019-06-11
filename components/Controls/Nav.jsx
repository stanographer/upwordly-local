import React, { useState } from 'react';
import { NavButton } from '../../components/Controls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAdjust,
  faAlignJustify,
  faFillDrip,
  faFont,
  faShareAlt,
  faTextHeight,
} from '@fortawesome/free-solid-svg-icons';

const icons = {
  colors: <FontAwesomeIcon icon={faFillDrip} />,
  lightDarkMode: <FontAwesomeIcon icon={faAdjust} />,
  font: <FontAwesomeIcon icon={faFont} />,
  fontSize: <FontAwesomeIcon icon={faTextHeight} />,
  share: <FontAwesomeIcon icon={faShareAlt} />,
  text: <FontAwesomeIcon icon={faAlignJustify} />,
};

const Nav = () => {
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <nav className="flex items-center justify-center md:justify-between flex-wrap bg-bg px-1 py-4 md:py-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img style={{width: '2rem', margin: '0 1rem'}}
               src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EMissile%3C/title%3E%3Cdesc%3EA line styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer2' d='M11.1 47.3C5.4 50 1.7 54.9 2 62c7.1.4 12-3.4 14.7-9.1' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/path%3E%3Cpath data-name='layer1' d='M62 2s-13.4-.7-22.6 8.5S8.3 44.4 8.3 44.4l11.3 11.4s24.7-22 33.9-31.2S62 2 62 2z' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/path%3E%3Ccircle data-name='layer2' cx='44' cy='20' r='4' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/circle%3E%3Cpath data-name='layer1' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.6 38.5l12 11.9M24.8 26H12.5l-7.7 7.7 11 2.3M37 40.2v12.3l-7.7 7.6L27 49.2'%3E%3C/path%3E%3C/svg%3E"
               alt="Missile" />
          <span className="
          font-semibold
          text-xl
          tracking-tight
          md:content-center">Upword.ly</span>
        </div>
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
            />
            <NavButton
                icon={icons.text}
                title="Text"
            />
            <NavButton
                icon={icons.colors}
                title="Colors"
            />
          </div>
          <div className="my-2">
            <NavButton
                icon={icons.share}
                title="Share"
            />
          </div>
        </div>
      </nav>
  );
};

export default Nav;
