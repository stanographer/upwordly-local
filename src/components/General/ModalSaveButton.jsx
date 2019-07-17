import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faSave } from '@fortawesome/free-solid-svg-icons/index';

const ModalSaveButton = ({context, label}) => {
  return (
      <button
          className="block border rounded text-teal-200 border-teal-200 bg-bg2 border-bg2 hover:border-transparent hover:text-bg hover:bg-teal-200 hover:border-teal-200 text-lg mt-8 mx-2 px-3 py-2 font-apercu"
          type="button"
          onClick={() => context.setSettings()}>
        <FontAwesomeIcon icon={faSave} className="pr-2" />
        {label}
      </button>
  );
};

export default ModalSaveButton;
