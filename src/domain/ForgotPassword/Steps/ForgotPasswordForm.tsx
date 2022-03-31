import { NextRouter } from 'next/router';

import Button from '@components/common/Button';
import Divider from '@components/common/Divider';
import Input from '@components/common/Input';
import styles from '@styles/pages/ForgotPassword.module.scss';

interface ForgotPasswordFormPropTypes {
  router: NextRouter;
  email: string;
  setEmail: (e: string) => void;
  setStep: (e: number) => void;
  emailError: string;
  onEmailBlur: () => void;
  onEmailFocus: () => void;
  setEmailError: (e: string) => void;
}

const ForgotPasswordForm = ({
  router,
  email,
  setEmail,
  setStep,
  emailError,
  onEmailBlur,
  onEmailFocus,
  setEmailError,
}: ForgotPasswordFormPropTypes) => {
  const isEmailValid = () => {
    if (!email) {
      setEmailError('Введите email.');
    }
    if (email && !emailError) {
      setStep(2);
    }
  };

  return (
    <>
      <Button customStyles={styles.goHomeButton} onClick={() => router.push('/')}>
        ← Back to home
      </Button>
      <div className={styles.container}>
        <span className={styles.title}>Forgot Password</span>
        <Divider />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          wrapperStyles={styles.input}
          type="email"
          label="Email"
          error={emailError}
          onBlur={onEmailBlur}
          onFocus={onEmailFocus}
          placeholder="john.doe@example.com"
        />
        <Button mode="contained" customStyles={styles.authButton} onClick={isEmailValid}>
          Send recovery link →
        </Button>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
