import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '../src/store';

import { Page } from '../types/page';
import '../styles/globals.scss';

type MyAppPropTypes = AppProps & {
  Component: Page;
};

const MyApp = ({ Component, pageProps }: MyAppPropTypes) => {
  const getLayout = Component.getLayout || ((page) => page);

  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
};

export default MyApp;
