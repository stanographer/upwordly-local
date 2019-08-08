import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Typed from 'react-typed';
import ReactFullpage from '@fullpage/react-fullpage';
import AboutSection from '../src/components/Landing/AboutSection';
import Button from '../src/components/Landing/Button';
import HowItWorksSection from '../src/components/Landing/HowItWorksSection';
import LogoInverted from '../src/components/Logos/LogoInverted';
import PricingSection from '../src/components/Landing/PricingSection';
import ContactSection from '../src/components/Landing/ContactSection';
import { SIGN_IN } from '../src/constants/routes';

const Loading = dynamic(() => import('../src/components/General/Loading'));

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
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
            navigation
            licenseKey={process.env.FULL_PAGE_KEY}
            scrollingSpeed={400}
            sectionsColor={[]}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <header className="section flex flex-col justify-center items-center text-center h-full bg-bgOverlay">
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
                  </header>
                  <section className="section flex">
                    <AboutSection />
                  </section>
                  <section className="section flex my-12 lg:my-4">
                    <HowItWorksSection />
                  </section>
                  <section className="section flex my-12 lg:my-4">
                    <PricingSection />
                  </section>
                  <section className="section flex my-12 lg:my-4">
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
