import React, { Fragment } from 'react';

const PricingSection = () => {
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
        Pricing
      </header>
      <p
        className="text-center
        mt-4
        mb-2
        text-lg
        font-bold
        text-green-200
        flex-shrink-0"
      >
        Clear and simple.
      </p>
      <main className="flex flex-wrap mx-10">
        <div className="flex flex-grow flex-wrap">
          <div className="flex w-full lg:w-1/3 h-auto px-6 py-4 justify-center">
            <div className="flex flex-col items-center mx-8 mb-4 mt-4">
              <div className="text-center">
                <h1 className="text-highlighter text-4xl font-apercu font-light">
                  ONE-TIME USE
                </h1>
                <p className="font-mono text-md">
                  Give us a try or pay as you go.
                </p>
              </div>
              <div className="py-0 lg:py-2 text-center">
                <span className="font-bold text-6xl text-green-200 mt-4">
                  $3
                </span>
              </div>
              <ul>
                <li className="mb-2">Permanent sign-in account.</li>
                <li className="mb-2">
                  An active transcription link for 24 hours.
                </li>
                <li className="mb-2">
                  Unrestricted access to any past jobs you create on the
                  platform to share, email, or save.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full lg:w-1/3 h-auto px-6 py-4 justify-center">
            <div className="flex flex-col items-center mx-8 mb-4 mt-4">
              <div className="text-center">
                <h1 className="text-highlighter text-4xl font-apercu font-light">
                  PERSONAL
                </h1>
                <p className="font-mono text-md">
                  For the occasional user with moderate clientele.
                </p>
              </div>
              <div className="py-0 lg:py-2 text-center">
                <span className="font-bold text-6xl text-green-200 mt-4">
                  $45
                </span>
                <span className="text-md text-green-200">/month</span>
              </div>
              <ul>
                <li className="mb-2">Permanent sign-in account.</li>
                <li className="mb-2">
                  Unlimited access to the platform for up to 25 jobs.
                </li>
                <li className="mb-2">
                  Unrestricted access to any past jobs you create on the
                  platform to share, email, or save.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full lg:w-1/3 h-auto px-6 py-4 justify-center">
            <div className="flex flex-col items-center mx-8 mb-4 mt-4">
              <div className="text-center">
                <h1 className="text-highlighter text-4xl font-apercu font-light">
                  ENTERPRISE
                </h1>
                <p className="font-mono text-md">
                  Larger businesses that exceed 40 assignments per month.
                </p>
              </div>
              <div className="py-0 lg:py-2 text-center">
                <span className="font-bold text-6xl text-green-200 mt-4">
                  $100
                </span>
                <span className="text-md text-green-200">/month</span>
              </div>
              <ul>
                <li className="mb-2">Permanent sign-in account.</li>
                <li className="mb-2">Unrestricted access.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default PricingSection;
