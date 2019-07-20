import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import NavDashboard from '../../Nav/NavDashboard';
import Footer from '../../General/Footer';

const Wrapper = props => {
  const {htmlTitle, title} = props;

  return (
      <Fragment>
        <Head>
          <title>{htmlTitle}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <NavDashboard
            active={title}
        />
        <section className="container mx-auto px-8 py-8 lg:mx-auto lg:px-16 lg:py-14 lg:py-13">
          {props.children}
        </section>
        <Footer />
      </Fragment>
  );
};

export default Wrapper;