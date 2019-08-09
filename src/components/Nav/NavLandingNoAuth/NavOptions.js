import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBolt,
  faCreditCard,
  faEnvelopeOpenText,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

const NavOptions = [
  {
    value: 'landing',
    label: (
      <p>
        <FontAwesomeIcon icon={faBars} /> Landing
      </p>
    ),
  },
  {
    value: 'about',
    label: (
      <p>
        <FontAwesomeIcon icon={faInfoCircle} /> About
      </p>
    ),
  },
  {
    value: 'howItWorks',
    label: (
      <p>
        <FontAwesomeIcon icon={faBolt} /> How it works
      </p>
    ),
  },
  {
    value: 'pricing',
    label: (
      <p>
        <FontAwesomeIcon icon={faCreditCard} /> Pricing
      </p>
    ),
  },
  {
    value: 'contact',
    label: (
      <p>
        <FontAwesomeIcon icon={faEnvelopeOpenText} /> Contact
      </p>
    ),
  },
];

export default NavOptions;
