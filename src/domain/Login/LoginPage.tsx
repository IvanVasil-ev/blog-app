import { useRouter } from 'next/router';

import AuthorizationLayout from '@layouts/AuthorizationLayout';
// import Input from '@components/common/Input';
import Button from '@components/common/Button';
import styles from '@styles/pages/Login.module.scss';

const LoginPage = () => {
  const router = useRouter();

  return (
    <div>
      <span className={styles.title}>Login</span>
      <Button customStyles={styles.goHomeButton} onClick={() => router.push('/')}>
        ← Back to home
      </Button>
      <div className={styles.container}>
        {/* <Input /> */}
        <Button customStyles={styles.authButton} onClick={() => router.push('/')}>
          Login →
        </Button>
        <div />
      </div>
      div
      <Button>Don&apos;t have account? Sign up!</Button>
      <Button>Forgot password?</Button>
    </div>
  );
};

LoginPage.getLayout = (page: any) => (
  <AuthorizationLayout title="Login">{page}</AuthorizationLayout>
);

export default LoginPage;
