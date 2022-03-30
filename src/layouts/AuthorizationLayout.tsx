import type { NextPage } from 'next';
import Head from 'next/head';

import { APP_NAME } from '@config';
import styles from '@styles/layouts/AuthorizationLayout.module.scss';

interface NextPagePropTypes {
  title: string;
}

const AuthorizationLayout: NextPage<NextPagePropTypes> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | ${APP_NAME}` : APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default AuthorizationLayout;
