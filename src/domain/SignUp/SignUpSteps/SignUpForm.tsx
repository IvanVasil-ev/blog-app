import { NextRouter } from 'next/router';

import Button from '@components/common/Button';
import Divider from '@components/common/Divider';
import Input from '@components/common/Input';
import styles from '@styles/pages/SignUp.module.scss';

interface SignUpFormPropTypes {
  router: NextRouter;
  email: string;
  emailError: string;
  onEmailBlur: () => void;
  onEmailFocus: () => void;
  isEmailValid: () => void;
  setEmail: (e: string) => void;
}

const SignUpForm = ({
  router,
  email,
  setEmail,
  emailError,
  onEmailBlur,
  onEmailFocus,
  isEmailValid,
}: SignUpFormPropTypes) => {
  return (
    <>
      <Button customStyles={styles.goHomeButton} onClick={() => router.push('/')}>
        ← Back to home
      </Button>
      <div className="card">
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
          placeholder="john.doe@example.com"
        />
        <Button mode="contained" customStyles={styles.authButton} onClick={isEmailValid}>
          Send email →
        </Button>
      </div>
      <div className={styles.footer}>
        <Button onClick={() => router.push('/login')}>Already have account? Log in!</Button>
        <Button onClick={() => router.push('/forgot-password')}>Forgot password?</Button>
      </div>
    </>
  );
};

export default SignUpForm;
