import { useRouter } from 'next/router';

import LogoIcon from '@svg/LogoIcon';
import Button from '@components/common/Button';
import styles from '@styles/components/Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div aria-hidden="true" className={styles.logo} onClick={() => router.push('/')}>
        <LogoIcon />
      </div>
      <div className={styles.controllers}>
        <Button onClick={() => router.push('/login')} mode="contained">
          Login
        </Button>
        <Button onClick={() => router.push('/signup')} mode="contained">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
