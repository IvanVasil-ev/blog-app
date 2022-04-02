import { NextRouter } from 'next/router';

import Button from '@components/common/Button';
import Divider from '@components/common/Divider';
import styles from '@styles/pages/SignUp.module.scss';

interface SignUpPropTypes {
  router: NextRouter;
  email: string;
}

const SignUpMessage = ({ router, email }: SignUpPropTypes) => {
  return (
    <div className="card">
      <span className={styles.title}>Sign up</span>
      <Divider />
      <div className={styles.signUpMessageText}>
        <span>We have sent a registration link to your email,</span>
        <span>{email}</span>
        <span>Please check your email.</span>
      </div>
      <Button mode="contained" customStyles={styles.authButton} onClick={() => router.push('/')}>
        Go to Home →
      </Button>
    </div>
  );
};

export default SignUpMessage;
