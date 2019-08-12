import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Typed from 'react-typed';
import ReactFullpage from '@fullpage/react-fullpage';
import AboutSection from '../src/components/Landing/AboutSection';
import Button from '../src/components/Landing/Button';
import HowItWorksSection from '../src/components/Landing/HowItWorksSection';
import { InView } from 'react-intersection-observer';
import LogoInverted from '../src/components/Logos/LogoInverted';
import NavLandingNoAuth from '../src/components/Nav/NavLandingNoAuth';
import PricingSection from '../src/components/Landing/PricingSection';
import ContactSection from '../src/components/Landing/ContactSection';
import { SIGN_IN } from '../src/constants/routes';
import { initGA, logPageView } from '../src/utils/analytics';

const Loading = dynamic(() => import('../src/components/General/Loading'));

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    setLoading(false);
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <Head>
            <title>Upword.ly - Live Transcription CMS</title>
          </Head>
          <ReactFullpage
            controlArrows={true}
            navigation
            lazyLoading={true}
            licenseKey={process.env.FULL_PAGE_KEY}
            responsiveWidth={800}
            scrollBar={true}
            scrollingSpeed={1100}
            sectionsColor={['#0C0F11']}
            touchSensitivity={7}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <NavLandingNoAuth
                    destination={
                      state && state.destination
                        ? state.destination.anchor
                        : 'landing'
                    }
                    fullpageApi={fullpageApi}
                    atTop={atTop}
                  />
                  <header
                    className="section flex flex-col justify-center items-center text-center"
                    data-anchor="landing"
                  >
                    <LogoInverted center />
                    <div className="mt-1">
                      <Typed
                        className="marquee text-teal-200 text-md lg:text-lg"
                        data-test="typed-text"
                        strings={[
                          'One platform to sync, send, and integrate your real-time transcriptions.',
                          'Web-based live stenography, anywhere.',
                        ]}
                        typeSpeed={40}
                        loop={false}
                      />
                    </div>
                    <div className="mt-10">
                      <Button
                        color="green"
                        text="Learn more"
                        type="button"
                        name="learn-more"
                        onClick={() => fullpageApi.moveSectionDown()}
                      />
                      <Link href={SIGN_IN} prefetch>
                        <Button
                          classNames="ml-3"
                          color="blue"
                          text="Sign In"
                          type="button"
                          name="sign-in button"
                        />
                      </Link>
                    </div>
                    <InView
                      as="div"
                      onChange={inView => {
                        setAtTop(inView);
                      }}
                    />
                  </header>
                  <section className="section flex" data-anchor="about">
                    <AboutSection />
                  </section>
                  <section
                    className="section flex my-12 lg:my-4"
                    data-anchor="howItWorks"
                  >
                    <HowItWorksSection />
                  </section>
                  <section
                    className="section flex my-12 lg:my-4"
                    data-anchor="pricing"
                  >
                    <PricingSection />
                  </section>
                  <section
                    className="section flex my-12 lg:my-4"
                    data-anchor="contact"
                  >
                    <ContactSection />
                  </section>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Index;
