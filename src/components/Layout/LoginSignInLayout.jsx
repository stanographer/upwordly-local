import React, { Fragment } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Typed from 'react-typed';
import Logo from '../../components/Logos/Logo';
import Footer from '../../components/General/Footer';

const LoginSignInLayout = props => {
  const {title, typedText} = props;

  return (
      <Fragment>
        <Head>
          <title>{title}</title>
          <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
              key="viewport"
          />
        </Head>
        <main className="container mx-auto h-full flex flex-1 justify-center items-center">
          <section className="w-full max-w-sm mt-20">
            <div className="my-4 lg:my-8">
                <Logo center={true} title="Upword.ly Logo" />
              <div className="font-sans mb-10 mt-6 text-center justify-center">
                <Typed
                    data-test="typed-header"
                    className="marquee"
                    strings={typedText}
                    typeSpeed={40} />
              </div>
            </div>
            {props.children}
            <Footer />
          </section>
        </main>
      </Fragment>
  );
};

LoginSignInLayout.propTypes = {
  title: PropTypes.string.isRequired,
  typedText: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default LoginSignInLayout;
