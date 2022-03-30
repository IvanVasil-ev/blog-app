import { Component } from 'react';

import DefaultLayout from '@layouts/DefaultLayout';
import styles from '@styles/pages/Home.module.scss';

const HomePage = () => {
  return <div className={styles.container}>Welcome to home page</div>;
};

HomePage.getLayout = (page: Component) => <DefaultLayout title="Home">{page}</DefaultLayout>;

export default HomePage;
