import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {LANDING} from '../../constants/routes';

const LogoInverted = ({center}) => {
  return (
      <Link href={LANDING} prefetch>
        <div data-test="logo-inverted"
            className={
          center
              ? 'nav-logo cursor-pointer flex items-center flex-grow-0 text-white justify-center'
              : 'nav-logo cursor-pointer flex items-center flex-grow-0 text-white mr-6'
        }>

          <div className="font-bold text-highlighter py-4 pl-0 pr-4 italic text-6xl tracking-tight md:content-center"
              data-test="logo-title">
            <svg className="inline-block fill-current text-grey h-20 w-20 mx-2 -mt-4"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20">
              <path
                  d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z" />
            </svg>
            Upword.ly
          </div>
        </div>
      </Link>
  );
};

LogoInverted.propTypes = {
  center: PropTypes.bool,
};

export default LogoInverted;
