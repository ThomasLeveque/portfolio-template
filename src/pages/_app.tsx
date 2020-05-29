import React from 'react';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import Header from '@/components/header';

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <>
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
