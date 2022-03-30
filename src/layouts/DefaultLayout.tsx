import type { NextPage } from 'next';
import Head from 'next/head';

import { APP_NAME } from '@config';
import Navbar from '@components/ui/Navbar';
import styles from '@styles/layouts/DefaultLayout.module.scss';

interface NextPagePropTypes {
  title?: string;
}

const DefaultLayout: NextPage<NextPagePropTypes> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | ${APP_NAME}` : APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default DefaultLayout;
