import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '@components/ui/Navbar';

interface NextPageProps {
  title?: string;
}

const DefaultLayout: NextPage<NextPageProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | BlogApp` : 'BlogApp'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default DefaultLayout;
