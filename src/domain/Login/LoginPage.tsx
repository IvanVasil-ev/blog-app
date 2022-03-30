import { Component, useState } from 'react';
import { useRouter } from 'next/router';

import AuthorizationLayout from '@layouts/AuthorizationLayout';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import styles from '@styles/pages/Login.module.scss';

const LoginPage = () => {
  const router = useRouter();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Button customStyles={styles.goHomeButton} onClick={() => router.push('/')}>
        ← Back to home
      </Button>
      <div className={styles.container}>
        <span className={styles.title}>Login</span>
        <div className={styles.divider} />
        <Input
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          wrapperStyles={styles.input}
          type="email"
          label="Username"
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
