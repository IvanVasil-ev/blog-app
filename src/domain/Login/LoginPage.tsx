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
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onEmailFocus = () => setEmailError('');

  const onPasswordFocus = () => setPasswordError('');

  const isCredentialsValid = () => {
    if (!email) {
      setEmailError('Введите email.');
    }
    if (!password) {
      setPasswordError('Введите пароль.');
    }
    if (email && password) {
      router.push('/');
    }
  };

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
          error={emailError}
          onFocus={onEmailFocus}
          placeholder="john.doe@example.com"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          wrapperStyles={styles.input}
          type="password"
          label="Password"
          error={passwordError}
          onFocus={onPasswordFocus}
        />
        <Button mode="contained" customStyles={styles.authButton} onClick={isCredentialsValid}>
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
