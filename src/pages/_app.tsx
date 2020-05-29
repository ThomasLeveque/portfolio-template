import React from 'react';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider } from 'styled-components';
import { myTheme } from 'src/theme/my-theme';

import Header from '@/components/header/header';
import { GlobalStyles } from '@/styles/global.styles';

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MyApp;
