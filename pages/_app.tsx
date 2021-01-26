import React from 'react';

export default function App({ Component, pageProps }: {Component: any, pageProps: any}): React.FunctionComponentElement<any> {
  return <Component {...pageProps } />;
}