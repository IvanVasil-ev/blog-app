import type { AppProps } from 'next/app';

import { Page } from '../types/page';
import '../styles/globals.scss';

type MyAppProps = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
