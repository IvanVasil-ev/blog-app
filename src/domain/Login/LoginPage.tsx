import { Component, useState } from 'react';
import { useRouter } from 'next/router';

import AuthorizationLayout from '@layouts/AuthorizationLayout';
import Divider from '@components/common/Divider';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import styles from '@styles/pages/Login.module.scss';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Button customStyles={styles.goHomeButton} onClick={() => router.push('/')}>
        ← Back to home
      </Button>
      <div className={styles.container}>
        <span className={styles.title}>Login</span>
        <Divider />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          wrapperStyles={styles.input}
          type="email"
          label="Email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          wrapperStyles={styles.input}
          type="password"
          label="Password"
        />
        <Button mode="contained" customStyles={styles.authButton} onClick={() => router.push('/')}>
          Login →
        </Button>
      </div>
      <div className={styles.footer}>
        <Button onClick={() => router.push('/signup')}>Don&apos;t have account? Sign up!</Button>
        <Button onClick={() => router.push('/forgot-password')}>Forgot password?</Button>
      </div>
    </div>
  );
};

LoginPage.getLayout = (page: Component) => (
  <AuthorizationLayout title="Login">{page}</AuthorizationLayout>
);

export default LoginPage;
