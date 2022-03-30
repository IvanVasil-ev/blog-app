import { useRouter } from 'next/router';

import LogoIcon from '@svg/LogoIcon';
import Button from '@components/common/Button';
import Dropdown from '@components/common/Dropdown';
import DropdownArrowIcon from '@svg/DropdownArrowIcon';
import styles from '@styles/components/Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  const isAuthenticated = false;

  const navbarPages = [
    {
      title: 'Profile',
      onClick: () => router.push('/profile'),
    },
    {
      title: 'Settings',
      onClick: () => router.push('/settings'),
    },
    {
      title: 'Logout',
      onClick: () => router.push('/'),
    },
  ];

  return (
    <div className={styles.container}>
      <div aria-hidden="true" className={styles.logo} onClick={() => router.push('/')}>
        <LogoIcon />
      </div>
      {isAuthenticated ? (
        <Dropdown data={navbarPages}>
          <>
            <div className={styles.avatar} />
            <span className={styles.dropdownTitle}>Ivan Vasilev</span>
            <DropdownArrowIcon />
          </>
        </Dropdown>
      ) : (
        <div className={styles.controllers}>
          <Button onClick={() => router.push('/login')} mode="contained">
            Login
          </Button>
          <Button onClick={() => router.push('/signup')} mode="contained">
            Sign Up
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
