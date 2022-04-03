import { NextRouter } from 'next/router';

import Button from '@components/common/Button';
import Divider from '@components/common/Divider';
import Input from '@components/common/Input';
import styles from '@styles/pages/ForgotPassword.module.scss';

interface ForgotPasswordFormPropTypes {
  router: NextRouter;
  email: string;
  setEmail: (e: string) => void;
  emailError: string;
  onEmailBlur: () => void;
  onEmailFocus: () => void;
  isEmailValid: () => void;
}

const ForgotPasswordForm = ({
  router,
  email,
  setEmail,
  emailError,
  onEmailBlur,
  onEmailFocus,
  isEmailValid,
}: ForgotPasswordFormPropTypes) => {
  return (
    <>
      <Button customStyles={styles.goHomeButton} onClick={() => router.push('/')}>
        ← Back to home
      </Button>
      <div className="card">
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
