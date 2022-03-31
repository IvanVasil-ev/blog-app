import { Component, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cx from 'clsx';

import { PASSWORD_REGEXP } from '@constants';
import AuthorizationLayout from '@layouts/AuthorizationLayout';
import Divider from '@components/common/Divider';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import styles from '@styles/pages/ForgotPassword.module.scss';

const RecoveryPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  useEffect(() => {
    setEmail('john.doe@example.com');
  }, []);

  const onPasswordBlur = () => {
    if (password && !PASSWORD_REGEXP.test(password)) {
      setPasswordError('Некоректный пароль.');
    }
  };

  const onConfirmPasswordBlur = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('Пароли не совпадают.');
    }
  };

  const onPasswordFocus = () => setPasswordError('');

  const onConfirmPasswordFocus = () => setConfirmPasswordError('');

  const isPassworsValid = () => {
    if (!password) {
      setPasswordError('Введите новый пароль.');
    }
    if (!confirmPassword) {
      setConfirmPasswordError('Подтвердите новый пароль.');
    }
    if (password && confirmPassword && !passwordError && !confirmPasswordError) {
      router.push('/');
    }
  };

  return (
    <div>
      <Button customStyles={styles.goHomeButton} onClick={() => router.push('/')}>
        ← Back to home
      </Button>
      <div className={cx(styles.container, styles.recoveryPasswordContainer)}>
        <span className={styles.title}>Recovery Password</span>
        <Divider />
        <Input
          isDisabled
          value={email}
          onChange={(e) => setPassword(e.target.value)}
          wrapperStyles={styles.input}
          type="email"
          label="Email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          wrapperStyles={styles.input}
          type="password"
          label="New password"
          error={passwordError}
          onBlur={onPasswordBlur}
          onFocus={onPasswordFocus}
        />
        <Input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          wrapperStyles={styles.input}
          type="password"
          label="Confirm Password"
          error={confirmPasswordError}
          onBlur={onConfirmPasswordBlur}
          onFocus={onConfirmPasswordFocus}
        />
        <Button mode="contained" customStyles={styles.authButton} onClick={isPassworsValid}>
          Reset password
        </Button>
      </div>
    </div>
  );
};

RecoveryPasswordPage.getLayout = (page: Component) => (
  <AuthorizationLayout title="Recovery password">{page}</AuthorizationLayout>
);

export default RecoveryPasswordPage;
