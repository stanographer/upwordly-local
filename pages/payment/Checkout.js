import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import {
  PAYMENT_SERVER_URL,
  STRIPE_PUBLISHABLE,
} from '../../src/constants/stripe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const CURRENCY = 'USD';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token => {
  console.log('token', token);
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount,
    })
    .then(successPayment)
    .catch(errorPayment);
};

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    ComponentClass="div"
    name={name}
    description={description}
    amount={amount}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    billingAddress
  >
    <button
      title="makePayment"
      className="bg-blue
        hover:bg-blue-dark
        text-teal-200
        font-bold
        py-2
        px-4
        rounded
        border-white
        hover:border-transparent
        hover:text-bg
        hover:bg-teal-200"
      type="button"
    >
      Make Payment
      <FontAwesomeIcon
        icon={faSignInAlt}
        title="sign-in button icon"
        className="mx-2"
      />
    </button>
  </StripeCheckout>
);

export default Checkout;
