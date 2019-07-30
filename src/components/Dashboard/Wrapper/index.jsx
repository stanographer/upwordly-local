import React, { Fragment } from 'react';
import Head from 'next/head';
import NavDashboard from '../../Nav/NavDashboard';
import Footer from '../../General/Footer';
import PropTypes from 'prop-types';

const Wrapper = props => {
  const {expandEditor, htmlTitle, title} = props;

  return (
      <Fragment>
        <Head>
          <title>{htmlTitle}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        {
         expandEditor
              ? ''
              : <NavDashboard
                  active={title}
              />
        }
        <section className={expandEditor ? 'mx-auto my-auto' : 'container mx-auto px-8 py-1 lg:mx-auto lg:px-16 lg:py-2'}>
          {props.children}
        </section>
        <Footer expandEditor={expandEditor} />
      </Fragment>
  );
};

Wrapper.propTypes = {
  expandEditor: PropTypes.bool,
  htmlTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Wrapper;