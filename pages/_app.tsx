import type { AppProps } from 'next/app';

import { Page } from '../types/page';
import '../styles/globals.scss';

type MyAppPropTypes = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: MyAppPropTypes) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
