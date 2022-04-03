import { Component, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { PASSWORD_REGEXP } from '@constants';
import DefaultLayout from '@layouts/DefaultLayout';
import Divider from '@components/common/Divider';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import styles from '@styles/pages/Settings.module.scss';

const SettingsPage = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');

  const onPasswordBlur = () => {
    if (password && !PASSWORD_REGEXP.test(password)) {
      setPasswordError('Некоректный пароль.');
    }
  };

  const onConfirmPasswordBlur = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Пароли не совпадают.');
    }
  };

  const onPasswordFocus = () => setPasswordError('');

  const onConfirmPasswordFocus = () => setConfirmPasswordError('');

  const isCredentialsValid = () => {
    if (password && !confirmPassword) {
      return onConfirmPasswordBlur();
    }
    if (!passwordError && !confirmPasswordError) {
      router.push('/profile');
    }
    return '';
  };

  useEffect(() => {
    setName('Ivan');
    setSurname('Vasilev');
    setAge('22');
    setProfession('Frontend Developer');
  }, []);

  return (
    <div className="container">
      <div className="card">
        <span className={styles.title}>Account Information</span>
        <div className={styles.userInfoContainer}>
          <span className={styles.subtitle}>General</span>
          <Input
            labelStyles={styles.label}
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
          />
          <Input
            labelStyles={styles.label}
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            label="Surname"
          />
          <Input
            type="number"
            labelStyles={styles.label}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            label="Age"
          />
          <Input
            labelStyles={styles.label}
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            label="Profession"
          />
          <Divider />
          <span className={styles.subtitle}>Change Password</span>
          <Input
            type="password"
            labelStyles={styles.label}
            customStyles={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            onBlur={onPasswordBlur}
            onFocus={onPasswordFocus}
            label="New password"
          />
          <Input
            type="password"
            labelStyles={styles.label}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPasswordError}
            onBlur={onConfirmPasswordBlur}
            onFocus={onConfirmPasswordFocus}
            label="Confirm password"
          />
          <div className={styles.buttonWrapper}>
            <Button mode="contained" customStyles={styles.saveButton} onClick={isCredentialsValid}>
              Save Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

SettingsPage.getLayout = (page: Component) => (
  <DefaultLayout title="settings">{page}</DefaultLayout>
);

export default SettingsPage;
