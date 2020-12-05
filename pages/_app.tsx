import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default wrapper.withRedux(App);
