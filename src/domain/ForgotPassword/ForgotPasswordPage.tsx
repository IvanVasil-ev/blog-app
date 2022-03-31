import { Component, useState } from 'react';
import { useRouter } from 'next/router';

import AuthorizationLayout from '@layouts/AuthorizationLayout';
import ForgotPasswordForm from '@domain/ForgotPassword/Steps/ForgotPasswordForm';
import RecoveryMessage from '@domain/ForgotPassword/Steps/RecoveryMessage';
import { EMAIL_REGEXP } from '@constants';

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
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
      {step === 1 ? (
        <ForgotPasswordForm
          router={router}
          email={email}
          setEmail={setEmail}
          setStep={setStep}
          emailError={emailError}
          onEmailBlur={onEmailBlur}
          onEmailFocus={onEmailFocus}
          setEmailError={setEmailError}
        />
      ) : (
        <RecoveryMessage router={router} email={email} />
      )}
    </div>
  );
};

ForgotPasswordPage.getLayout = (page: Component) => (
  <AuthorizationLayout title="Forgot password">{page}</AuthorizationLayout>
);

export default ForgotPasswordPage;
