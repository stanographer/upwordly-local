import React from 'react';
import PropTypes from 'prop-types';

const ToolbarButton = ({ title, icon, onClick }) => {
  return (
    <div className="flex px-4">
      <button
        data-test="toolbar-button"
        type="button"
        name="toolbar-button"
        onClick={onClick}
        className="appearance-none py-4 text-orange-200 border-b border-blue-dark mr-3"
      >
        {icon}
        <span className="px-2 text-sm" data-test="toolbar-button-title">
          {title}
        </span>
      </button>
    </div>
  );
};

ToolbarButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  onClick: PropTypes.func,
};

export default ToolbarButton;
