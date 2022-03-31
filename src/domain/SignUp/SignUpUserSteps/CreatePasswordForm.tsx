import { NextRouter } from 'next/router';
import cx from 'clsx';

import Button from '@components/common/Button';
import Divider from '@components/common/Divider';
import Input from '@components/common/Input';
import styles from '@styles/pages/SignUp.module.scss';

interface CreatePasswordFormPropTypes {
  router: NextRouter;
  password: string;
  setPassword: (e: string) => void;
  passwordError: string;
  onPasswordBlur: () => void;
  onPasswordFocus: () => void;
  confirmPassword: string;
  setConfirmPassword: (e: string) => void;
  confirmPasswordError: string;
  onConfirmPasswordBlur: () => void;
  onConfirmPasswordFocus: () => void;
  isPassworsValid: () => void;
}

const CreatePasswordForm = ({
  router,
  password,
  setPassword,
  passwordError,
  onPasswordBlur,
  onPasswordFocus,
  confirmPassword,
  setConfirmPassword,
  confirmPasswordError,
  onConfirmPasswordBlur,
  onConfirmPasswordFocus,
  isPassworsValid,
}: CreatePasswordFormPropTypes) => {
  return (
    <>
      <Button customStyles={styles.goHomeButton} onClick={() => router.push('/')}>
        ← Back to home
      </Button>
      <div className={cx(styles.container, styles.createPasswordContainer)}>
        <span className={styles.title}>Create Password</span>
        <Divider />
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
          Create Account
        </Button>
      </div>
    </>
  );
};

export default CreatePasswordForm;
