import React, { Component } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../src/firebase';
import * as ROUTES from '../../src/constants/routes';
import * as STRINGS from '../../src/constants/strings';
import ContentCardLayout from '../../src/components/Layout/ContentCardLayout';
import PaymentInput from '../../src/components/Inputs/PaymentInput';
import PhoneNumberInput from '../../src/components/Inputs/PhoneNumberInput';
import Checkout from './Checkout';

const Payment = () => <PaymentComponent />;

class PaymentComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cardNumber: '',
      cvc: '',
      error: '',
      expiry: '',
      phoneNumber: '',
      name: '',
      isInvalid: true,
    };
  }

  componentDidMount() {
    router.prefetch(ROUTES.DASHBOARD);
  }

  handleDataChange = event => {
    if (event && event.target) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    } else {
      this.setState({
        phoneNumber: event,
      });
    }
  };

  render() {
    const {
      cardNumber,
      cvc,
      error,
      expiry,
      phoneNumber,
      isInvalid,
      name,
    } = this.state;

    return (
      <ContentCardLayout
        title={STRINGS.PAYMENT_INFO_TITLE}
        typedText={STRINGS.ENTER_PAYMENT_INFO}
        cardType="payment"
      >
        <form
          className="bg-bg2 shadow-lg rounded px-8 pt-6 pb-8 mb-4"
          data-test="payment-form"
          aria-label="payment form"
          onSubmit={e => this.onSubmit(e)}
        >
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 mb-6 pr-3 md:mb-0">
              <label
                className="block text-grey-darker text-md mb-2"
                htmlFor={STRINGS.NAME}
              >
                {STRINGS.CC_NAME}
              </label>
              <input
                data-test="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-bg text-lg"
                name="name"
                type="text"
                placeholder={STRINGS.NAME}
                value={name}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="w-full pl-0 md:pl-3 md:w-1/2">
              <label
                className="block text-grey-darker text-md mb-2"
                htmlFor={STRINGS.PHONE_NUMBER}
              >
                {STRINGS.PHONE_NUMBER}
              </label>
              <PhoneNumberInput
                handleDataChange={this.handleDataChange}
                phoneNumber={phoneNumber}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-md mb-2"
              htmlFor={STRINGS.PAYMENT_INFO}
            >
              {STRINGS.PAYMENT_INFO}
            </label>
            <PaymentInput
              cardNumber={cardNumber}
              cvc={cvc}
              expiry={expiry}
              handleDataChange={this.handleDataChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <Link href={ROUTES.RESET_PASSWORD} prefetch>
              <a
                className="inline-block align-baseline font-bold text-md text-blue hover:text-blue-darker underline"
                href="#"
                title="Forgot password"
              >
                Forgot Password
              </a>
            </Link>
            <Checkout
              name={STRINGS.UPWORDLY_SUBSCRIPTION}
              description={STRINGS.PAYMENT_INFO}
              amount={100}
            />
          </div>
          {error && (
            <p className="text-md text-red-300 mt-4">
              Something went wrong. Please refresh or try again later.
            </p>
          )}
          <div className="text-center mt-6">
            <Link href={ROUTES.SIGN_UP} prefetch>
              <a className="text-green-200 underline">Create an account</a>
            </Link>
          </div>
        </form>
      </ContentCardLayout>
    );
  }
}

export default Payment;
