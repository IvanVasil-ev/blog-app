import { Component, useState } from 'react';
import { useRouter } from 'next/router';

import { EMAIL_REGEXP } from '@constants';
import AuthorizationLayout from '@layouts/AuthorizationLayout';
import SignUpForm from '@domain/SignUp/SignUpSteps/SignUpForm';
import SignUpMessage from '@domain/SignUp/SignUpSteps/SignUpMessage';

const SignUpPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const onEmailBlur = () => {
    if (email && !EMAIL_REGEXP.test(email)) {
      setEmailError('Некорректный email.');
    }
  };

  const onEmailFocus = () => {
    setEmailError('');
  };

  const isEmailValid = () => {
    if (!email) {
      setEmailError('Введите email.');
    }
    if (email && !emailError) {
      setStep(2);
    }
  };

  return (
    <div>
      {step === 1 ? (
        <SignUpForm
          router={router}
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          onEmailBlur={onEmailBlur}
          onEmailFocus={onEmailFocus}
          isEmailValid={isEmailValid}
        />
      ) : (
        <SignUpMessage router={router} email={email} />
      )}
    </div>
  );
};

SignUpPage.getLayout = (page: Component) => (
  <AuthorizationLayout title="Sign Up">{page}</AuthorizationLayout>
);

export default SignUpPage;
