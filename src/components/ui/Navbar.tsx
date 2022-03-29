import Button from '@components/common/Button';
import styles from '@styles/components/Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div />
      <div className={styles.controllers}>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
