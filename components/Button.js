import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ click, filter, href, id, path, scrolling, title }) => {
  return (
      <span className={!scrolling ? 'visible' : 'invisible'}
          style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}
            onClick={click}>
      <i className="icon">
        <svg
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <circle id={ id } cx="24" cy="24" r="24" />
            <filter id={ filter } width="114.6%" height="114.6%" x="-7.3%" y="-5.2%"
                    filterUnits="objectBoundingBox">
              <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1" />
              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.137256567 0" />
            </filter>
          </defs>
          <g fill="none" fillRule="nonzero">
            <g transform="translate(2 1)">
              <use fill="#000" filter={ `url(#${ filter })` } href={ `#${ href }` }>
                <circle id="scroll-top-b" cx="24" cy="24" r="24" />
              </use>
              <use fill="#fff" href={ `#${ href }` }>
                <circle id={ id } cx="24" cy="24" r="24" fill="#fff" />
              </use>
            </g>
            <path d={ path } className="stroke" />
          </g>
        </svg>
      </i>
      <span className="visually-hidden">{ title }</span>
    </span>
  );
};

Button.propTypes = {
  filter: PropTypes.string,
  href: PropTypes.string,
  id: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
};

export default Button;
