import '../styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import React, { useMemo } from 'react';
import { SSRContext } from '../context/SSRContext';

function MyApp({ Component, pageProps }: AppProps) {
  const { currentHost } = pageProps;

  const ssrContextValue = useMemo(
    () => ({
      currentHost,
    }),
    [currentHost]
  );

  return (
    <SSRContext.Provider value={ssrContextValue}>
      <Component {...pageProps} />
    </SSRContext.Provider>
  );
}
export default MyApp;

MyApp.getInitialProps = async (appContext: AppContext) => {
  const currentHost = appContext.ctx.req?.headers.host;

  return {
    pageProps: {
      currentHost,
    },
  };
};
