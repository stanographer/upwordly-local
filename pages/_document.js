// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
        <Html>
          <Head>
            <script
                async
                defer
                type="text/javascript"
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
            />
            <style>{`body { margin: 0 } /* custom! */`}</style>
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