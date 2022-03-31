import { Component, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { PASSWORD_REGEXP } from '@constants';
import AuthorizationLayout from '@layouts/AuthorizationLayout';
import AccountInformationForm from '@domain/SignUp/SignUpUserSteps/AccountInformationForm';
import CreatePasswordForm from '@domain/SignUp/SignUpUserSteps/CreatePasswordForm';

const SignUpUserPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [surname, setSurname] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');

  useEffect(() => {
    setEmail('john.doe@example.com');
  }, []);

  const isInformationValid = () => {
    if (!name) {
      setNameError('Заполните поле.');
    }
    if (!surname) {
      setSurnameError('Заполните поле.');
    }
    if (name && surname) {
      setStep(2);
    }
  };

  const isPasswordValid = () => {
    if (!password) {
      setPasswordError('Введите пароль');
    }
    if (!confirmPassword) {
      setConfirmPasswordError('Подтвердите пароль.');
    }
    if (PASSWORD_REGEXP.test(password) && password === confirmPassword) {
      router.push('/');
    }
  };

  const onPasswordBlur = () => {
    if (password && !PASSWORD_REGEXP.test(password)) {
      setPasswordError('Некорректный пароль.');
    }
  };

  const onConfirmPasswordBlur = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Пароли не совпадают');
    }
  };

  const onPasswordFocus = () => setPasswordError('');

  const onConfirmPasswordFocus = () => setConfirmPasswordError('');

  const onNameFocus = () => setNameError('');

  const onSurnameFocus = () => setSurnameError('');

  return (
    <div>
      {step === 1 ? (
        <AccountInformationForm
          router={router}
          email={email}
          setEmail={setEmail}
          name={name}
          setName={setName}
          nameError={nameError}
          onNameFocus={onNameFocus}
          surname={surname}
          setSurname={setSurname}
          surnameError={surnameError}
          onSurnameFocus={onSurnameFocus}
          age={age}
          setAge={setAge}
          profession={profession}
          setProfession={setProfession}
          isInformationValid={isInformationValid}
        />
      ) : (
        <CreatePasswordForm
          router={router}
          password={password}
          setPassword={setPassword}
          passwordError={passwordError}
          onPasswordBlur={onPasswordBlur}
          onPasswordFocus={onPasswordFocus}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          confirmPasswordError={confirmPasswordError}
          onConfirmPasswordBlur={onConfirmPasswordBlur}
          onConfirmPasswordFocus={onConfirmPasswordFocus}
          isPassworsValid={isPasswordValid}
        />
      )}
    </div>
  );
};

SignUpUserPage.getLayout = (page: Component) => (
  <AuthorizationLayout title="Sign Up">{page}</AuthorizationLayout>
);

export default SignUpUserPage;
