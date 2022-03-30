import { Component, useState } from 'react';
import { useRouter } from 'next/router';

import AuthorizationLayout from '@layouts/AuthorizationLayout';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import styles from '@styles/pages/ForgotPassword.module.scss';

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <div>
      <Button customStyles={styles.goHomeButton} onClick={() => router.push('/')}>
        ← Back to home
      </Button>
      <div className={styles.container}>
        <span className={styles.title}>Forgot Password</span>
        <div className={styles.divider} />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          wrapperStyles={styles.input}
          type="email"
          label="Email"
        />
        <Button mode="contained" customStyles={styles.authButton} onClick={() => router.push('/')}>
          Send recovery link →
        </Button>
      </div>
    </div>
  );
};

ForgotPasswordPage.getLayout = (page: Component) => (
  <AuthorizationLayout title="Forgot password">{page}</AuthorizationLayout>
);

export default ForgotPasswordPage;
