import React from 'react';
import PropTypes from 'prop-types';

const ToolbarButton = ({title, icon, onClick}) => {
  return (
      <div className="flex px-4">
        <button type="button"
                name="title"
                onClick={onClick}
                className="appearance-none py-4 text-orange-200 border-b border-blue-dark mr-3">
          {icon}<span className="px-2 text-sm">{title}</span>
        </button>
      </div>
  );
};

ToolbarButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
};

export default ToolbarButton;
