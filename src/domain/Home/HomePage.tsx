import DefaultLayout from '@layouts/DefaultLayout';
import styles from '@styles/pages/Home.module.scss';

const HomePage = () => {
  return <div className={styles.container}>Welcome to home page</div>;
};

HomePage.getLayout = (page: any) => <DefaultLayout title="Home">{page}</DefaultLayout>;

export default HomePage;
