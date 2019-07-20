import React from 'react';
import App, { Container } from 'next/app';
import { ToastContainer } from 'react-toastify/index';
import 'react-toastify/dist/ReactToastify.min.css';
import '../fonts.css';
import '../style.css';

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
        <Container>
          <ToastContainer
              draggable
              autoClose={5000}
          />
          <Component {...pageProps} />
        </Container>
    );
  }
}

export default MyApp;