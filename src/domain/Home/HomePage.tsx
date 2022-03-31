import { Component } from 'react';

import DefaultLayout from '@layouts/DefaultLayout';
import Card from '@domain/Home/Card';
import styles from '@styles/pages/Home.module.scss';

const HomePage = () => {
  const data = [
    {
      title: 'Hello',
    },
  ];

  return (
    <>
      <div className={styles.header}>Welcome to home page</div>
      {data.map(({ title }) => (
        <Card key={title} title={title} />
      ))}
    </>
  );
};

HomePage.getLayout = (page: Component) => <DefaultLayout title="Home">{page}</DefaultLayout>;

export default HomePage;
