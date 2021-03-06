import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ expandEditor }) => {
  return !expandEditor ? (
    <footer data-test="footer">
      <p className="text-center text-grey text-xs mt-10">
        © {new Date().getFullYear()} Upword.ly
      </p>
      <p className="text-center text-green-200 text-xs mt-2">
        Built with <FontAwesomeIcon icon={faHeart} /> in NYC
      </p>
    </footer>
  ) : (
    ''
  );
};

export default Footer;
