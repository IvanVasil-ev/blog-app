import { MouseEventHandler } from 'react';
import cx from 'clsx';

import styles from '@styles/components/Button.module.scss';

interface ButtonPropTypes {
  customStyles?: any;
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  mode?: 'contained' | 'outlined';
}

const Button = ({ children, customStyles, mode, onClick = () => false }: ButtonPropTypes) => {
  const buttonStyle = () => {
    switch (mode) {
      case 'contained':
        return styles.contained;
      case 'outlined':
        return styles.outlined;
      default:
        return styles.default;
    }
  };

  return (
    <button
      type="button"
      className={cx(styles.button, buttonStyle(), customStyles)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
