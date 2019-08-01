import React from 'react';
import Typed from 'react-typed';
import PropTypes from 'prop-types';

const Heading = ({heading, typedText, additionalText}) => {
  return (
      <div className="text-center lg:text-left">
        <p className="font-apercu text-5xl" data-test="heading-text">
          {heading}
        </p>
        <Typed
            className="marquee text-teal-200"
            data-test="typed-text"
            strings={typedText}
            typeSpeed={40}
        />
        {
          additionalText
            ? additionalText
            : ''
        }
      </div>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  typedText: PropTypes.arrayOf(PropTypes.string).isRequired,
  additionalText: PropTypes.object,
};

export default Heading;
