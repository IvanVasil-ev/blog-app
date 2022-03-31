import { NextRouter } from 'next/router';
import cx from 'clsx';

import Button from '@components/common/Button';
import Divider from '@components/common/Divider';
import styles from '@styles/pages/ForgotPassword.module.scss';

interface RecoveryMessagePropTypes {
  router: NextRouter;
  email: string;
}

const RecoveryMessage = ({ router, email }: RecoveryMessagePropTypes) => {
  return (
    <div className={cx(styles.container, styles.recoveryMessageContainer)}>
      <span className={styles.title}>Recovery Password</span>
      <Divider />
      <div className={styles.recoveryMessageText}>
        <span>We have sent a password recovery link to,</span>
        <span>{email}</span>
        <span>Please check your email.</span>
      </div>
      <Button mode="contained" customStyles={styles.authButton} onClick={() => router.push('/')}>
        Go to Home →
      </Button>
    </div>
  );
};

export default RecoveryMessage;
