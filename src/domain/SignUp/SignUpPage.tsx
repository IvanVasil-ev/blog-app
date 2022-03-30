import { Component } from 'react';

import AuthorizationLayout from '@layouts/AuthorizationLayout';
import styles from '@styles/pages/SignUp.module.scss';

const SignUpPage = () => {
  return <div className={styles.container}>SignUp Page</div>;
};

SignUpPage.getLayout = (page: Component) => (
  <AuthorizationLayout title="Sign Up">{page}</AuthorizationLayout>
);

export default SignUpPage;
