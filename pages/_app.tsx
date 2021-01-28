import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Nav from 'src/components/nav';

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}): React.FunctionComponentElement<any> {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
