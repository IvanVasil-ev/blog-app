import type { NextPage } from 'next';
import Head from 'next/head';

interface NextPageProps {
  title: string;
}

const AuthorizationLayout: NextPage<NextPageProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | BlogApp` : 'BlogApp'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default AuthorizationLayout;
