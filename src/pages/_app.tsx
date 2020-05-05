import React from 'react';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

import Header from '../components/header';

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <style jsx global>{`
        html,
        body {
          font-family: 'Montserrat', sans-serif;
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default MyApp;
