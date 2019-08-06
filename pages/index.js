import React, { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Logo from '../src/components/Logos/Logo';
import Footer from '../src/components/General/Footer';
import Typed from 'react-typed';
import { FullPage, Slide } from 'react-full-page';
import { SIGN_IN, SIGN_UP } from '../src/constants/routes';
import NavLandingNoAuth from '../src/components/Nav/NavLandingNoAuth';

const Index = () => {
  return (
      <Fragment>
        <Head>
          <title>Upword.ly - Live Transcription CMS</title>
        </Head>
        <NavLandingNoAuth />
        <FullPage>
          <Slide>
            <section className="flex flex-col justify-center items-center text-center h-full -my-20">
              <Logo center={true} />
              <div className='mt-5'>
                <Typed
                    className='marquee text-teal-200 text-md lg:text-lg'
                    data-test='typed-text'
                    strings={[
                      'One platform to sync, send, and integrate your real-time transcriptions.',
                      'Web-based live stenography, anywhere.',
                    ]}
                    typeSpeed={40}
                    loop
                />
              </div>
            </section>
          </Slide>
          <Slide>
            <div className='landing-wrapper' id='landing-wrapper'>
              <section className='intro my-auto'>
                <div className='flex flex-wrap lg:flex-grow mt-8'>
                  <p className='w-9/12 lg:w-7/12 text-left mx-auto my-5 sm:text-lg lg:text-2xl'>
                    Upword.ly is a real-time transcription delivery tool and a content
                    management system (CMS) for real-time stenographers. You log in,
                    create a job, connect your CAT software via a small helper app,
                    and start writing. Distribute your live feed to anyone via a short
                    URL and that's it! Since it is web-based, there's no need for your
                    consumers to install anything on their end. When the job is over,
                    it's your choice to use the variety of tools to save or
                    disseminate the transcript or to delete it. Simple.
                  </p>
                  <Link href={SIGN_IN} prefetch={true}>
                    <button
                        title='sign in'
                        className='bg-blue hover:bg-blue-dark text-teal-200 font-bold md:text-lg py-2 px-4 mx-2 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200'
                        type='button'>
                      Sign In
                    </button>
                  </Link>
                  <Link href={SIGN_UP} prefetch={true}>
                    <button
                        title='sign up'
                        className='bg-blue hover:bg-blue-dark text-teal-200 font-bold md:text-lg py-2 px-4 mx-2 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200'
                        type='button'>
                      Sign Up
                    </button>
                  </Link>
                </div>
                <Footer />
              </section>
            </div>
          </Slide>
        </FullPage>
      </Fragment>

  );
};

Index.getInitialProps = async ({query, res}) => {
  console.log('query, res', query, res);
};

export default Index;
