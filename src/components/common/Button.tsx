import cx from 'clsx';

import styles from '@styles/components/Button.module.scss';

interface ButtonProps {
  children: string;
  customStyles?: any;
}

const Button = ({ children, customStyles = {} }: ButtonProps) => {
  return (
    <button type="button" className={cx(styles, customStyles)}>
      {children}
    </button>
  );
};

export default Button;
