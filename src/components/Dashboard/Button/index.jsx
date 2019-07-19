import React from 'react';
import PropTypes from 'prop-types';

const Button = ({color, onClick, margin, text, type}) => {
  const classes = color => `bg-bg2 text-${color}-200 border border-${color}-200 hover:bg-${color}-200 hover:text-bg2 hover:border-${color}-200`;

  return (
      onClick
          ? <button
              data-test="dashboard-button"
              type={type}
              className={`rounded px-6 py-4 ${margin} ${classes(color)}`}
              onClick={e => onClick(e)}>
            {text}
          </button>
          : <button
              data-test="dashboard-button"
              type={type}
              className={`rounded px-6 py-4 ${margin} ${classes(color)}`}>
            {text}
          </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['blue', 'green', 'red']).isRequired,
  onClick: PropTypes.func,
  margin: PropTypes.string,
  text: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
};

export default Button;
