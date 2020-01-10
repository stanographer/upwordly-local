import React, { Fragment } from 'react';
import App from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../public/static/styles/style.css';
import '../public/static/styles/fonts.css';
// dynamic(() => import('../public/static/styles/style.css'));
// dynamic(() => import('../public/static/styles/fonts.css'));

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <ToastContainer draggable autoClose={5000} />
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

export default MyApp;
