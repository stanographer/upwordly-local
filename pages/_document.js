// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="Description"
            content="Upword.ly - Cloud-Based Transcription CMS for Live Captioners and Stenographers"
          />
          <link
            rel="/static/img/favicons/apple-touch-icon"
            sizes="57x57"
            href="/static/img/favicons//static/img/favicons/apple-icon-57x57.png"
          />
          <link
            rel="/static/img/favicons/apple-touch-icon"
            sizes="60x60"
            href="/static/img/favicons//static/img/favicons/apple-icon-60x60.png"
          />
          <link
            rel="/static/img/favicons/apple-touch-icon"
            sizes="72x72"
            href="/static/img/favicons/apple-icon-72x72.png"
          />
          <link
            rel="/static/img/favicons/apple-touch-icon"
            sizes="76x76"
            href="/static/img/favicons/apple-icon-76x76.png"
          />
          <link
            rel="/static/img/favicons/apple-touch-icon"
            sizes="114x114"
            href="/static/img/favicons/apple-icon-114x114.png"
          />
          <link
            rel="/static/img/favicons/apple-touch-icon"
            sizes="120x120"
            href="/static/img/favicons/apple-icon-120x120.png"
          />
          <link
            rel="/static/img/favicons/apple-touch-icon"
            sizes="144x144"
            href="/static/img/favicons/apple-icon-144x144.png"
          />
          <link
            rel="/static/img/favicons/apple-touch-icon"
            sizes="152x152"
            href="/static/img/favicons/apple-icon-152x152.png"
          />
          <link
            rel="/static/img/favicons/apple-touch-icon"
            sizes="180x180"
            href="/static/img/favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/img/favicons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/img/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/img/favicons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/img/favicons/favicon-16x16.png"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/img/favicons/favicon.ico"
          />
          <link rel="manifest" href="/static/img/favicons/manifest.json" />
          <meta name="msapplication-TileColor" content="#282c34" />
          <meta
            name="msapplication-TileImage"
            content="/static/img/favicons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#282c34" />
          <style>{'body { margin: 0 } /* custom! */'}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
