import { Component, useState } from 'react';
import { useRouter } from 'next/router';

import AuthorizationLayout from '@layouts/AuthorizationLayout';
import Divider from '@components/common/Divider';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import { EMAIL_REGEXP } from '@constants';
import styles from '@styles/pages/SignUp.module.scss';

const SignUpPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const onEmailBlur = () => {
    if (!EMAIL_REGEXP.test(email)) {
      setEmailError('Введите email.');
    }
  };

  const onEmailFocus = () => {
    setEmailError('');
  };

  return (
    <div>
      <Button customStyles={styles.goHomeButton} onClick={() => router.push('/')}>
        ← Back to home
      </Button>
      <div className={styles.container}>
        <span className={styles.title}>Sign up</span>
        <Divider />
        <Input
          value={email}
          error={emailError}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={onEmailBlur}
          onFocus={onEmailFocus}
          wrapperStyles={styles.input}
          type="email"
          label="Email"
        />
        <Button mode="contained" customStyles={styles.authButton} onClick={() => router.push('/')}>
          Send email →
        </Button>
      </div>
      <div className={styles.footer}>
        <Button onClick={() => router.push('/login')}>Already have account? Log in!</Button>
        <Button onClick={() => router.push('/forgot-password')}>Forgot password?</Button>
      </div>
    </div>
  );
};

SignUpPage.getLayout = (page: Component) => (
  <AuthorizationLayout title="Sign Up">{page}</AuthorizationLayout>
);

export default SignUpPage;
