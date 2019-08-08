import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classNames, name, color, onClick, text, type }) => {
  const classes = color =>
    `text-${color}-200 border-${color}-200 hover:bg-${color}-200 hover:border-${color}-200`;

  return onClick ? (
    <button
      aria-label={`${text} button`}
      data-test="landing-button"
      name={name}
      title={text}
      type={type}
      className={`rounded border hover:text-bg2 px-6 py-4 ${classNames} ${classes(
        color,
      )}`}
      onClick={e => onClick(e)}
    >
      {text}
    </button>
  ) : (
    <button
      aria-label={`${text} button`}
      data-test="landing-button"
      name={name}
      title={text}
      type={type}
      className={`rounded border hover:text-bg2 px-6 py-4 ${classNames} ${classes(
        color,
      )}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  classNames: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'green', 'red']).isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
};

export default Button;
