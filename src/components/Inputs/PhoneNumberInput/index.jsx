import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import PropTypes from 'prop-types';

const PhoneNumberInput = ({ phoneNumber, handleDataChange }) => {
  return (
    <PhoneInput
      className="shadow appearance-none border rounded w-full py-2 px-3 text-bg bg-white text-lg"
      defaultCountry="US"
      name="phoneNumber"
      placeholder="Enter phone number"
      value={phoneNumber}
      onChange={handleDataChange}
    />
  );
};

export default PhoneNumberInput;

PhoneNumberInput.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  handleDataChange: PropTypes.func.isRequired,
};
