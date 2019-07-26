import React from 'react';
import PropTypes from 'prop-types';

const JobComponentButton = ({color, icon, onClick, text}) => {
  return (
      <button type="button"
              className={`bg-bg2 text-${color}-200 border border-${color}-200 rounded px-4 py-3 hover:bg-${color}-200 hover:border-${color}-200 hover:text-bg2`}
              onClick={onClick}>
        <span className="mr-0 lg:mr-3">{icon}</span>
        <span className="text-md hidden lg:text-lg lg:inline-block">{text}</span>
      </button>
  );
};

JobComponentButton.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default JobComponentButton;
