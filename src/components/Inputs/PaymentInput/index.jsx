import React, { useState } from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { css } from 'styled-components';
import PropTypes from 'prop-types';

export default function PaymentInput({
  cardNumber,
  expiry,
  cvc,
  handleDataChange,
}) {
  const {
    getCardNumberProps,
    getCardImageProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps,
  } = usePaymentInputs();

  const formStyles = {
    fieldWrapper: {
      base: css`
        display: block;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
      `,
    },
    inputWrapper: {
      base: css`
        border-color: green;
        height: 2.9rem;
        width: 100%;
      `,
      errored: css`
        border-color: maroon;
      `,
      focused: css`
        border-color: unset;
        box-shadow: unset;
        outline: 2px solid blue;
        outline-offset: 2px;
      `,
    },
    input: {
      base: css`
        color: rgb(30, 34, 39);
        font-size: 1.125rem;
        padding-bottom: -0.5rem;
        padding-top: -0.5rem;
      `,
      errored: css`
        color: #e53e3e;
      `,
      cardNumber: css`
        width: 15rem;
      `,
      expiryDate: css`
        width: 10rem;
      `,
      cvc: css`
        width: 5rem;
      `,
    },
    errorText: {
      base: css`
        color: #feb2b2;
        font-size: 1.23rem;
      `,
    },
  };

  return (
    <PaymentInputsWrapper {...wrapperProps} styles={formStyles}>
      <svg {...getCardImageProps({ images })} />
      <input
        {...getCardNumberProps({ onChange: handleDataChange })}
        name="cardNumber"
        value={cardNumber}
      />
      <input
        {...getExpiryDateProps({ onChange: handleDataChange })}
        name="expiry"
        value={expiry || ''}
      />
      <input
        {...getCVCProps({ onChange: handleDataChange })}
        name="cvc"
        value={cvc || ''}
      />
    </PaymentInputsWrapper>
  );
}

PaymentInput.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  expiry: PropTypes.string.isRequired,
  cvc: PropTypes.string.isRequired,
  handleDataChange: PropTypes.func.isRequired,
};
