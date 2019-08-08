import React, { Fragment } from 'react';
import Footer from '../../General/Footer';

const ContactSection = () => {
  return (
    <Fragment>
      <header
        className="text-center
        mb-10
        text-5xl
        font-bold
        italic
        text-bg
        bg-highlighter
        flex-shrink-0"
      >
        Contact
      </header>
      <main className="flex flex-wrap mx-10">
        <div className="flex flex-grow flex-wrap justify-center">
          <div className="text-center my-8 lg:my-12">
            <h1 className="text-highlighter text-4xl font-apercu font-light">
              UNDER CONSTRUCTION
            </h1>
            <p className="font-mono text-md">
              A contact form should magically appear here in within the next few
              weeks (August 8).
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ContactSection;
