import { MouseEventHandler } from 'react';
import cx from 'clsx';

import LoadSpinnerIcon from '@svg/LoadSpinnerIcon';
import styles from '@styles/components/Button.module.scss';

interface ButtonPropTypes {
  customStyles?: string;
  loaderStyles?: string;
  children: string | JSX.Element;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  mode?: 'contained' | 'outlined';
}

const Button = ({
  children,
  customStyles,
  loaderStyles,
  isLoading,
  isDisabled,
  mode,
  onClick = () => false,
}: ButtonPropTypes) => {
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

  return isLoading ? (
    <div className={cx(styles.button, loaderStyles)}>
      <LoadSpinnerIcon width={35} height={35} styles={styles.loader} />
    </div>
  ) : (
    <button
      type="button"
      disabled={isDisabled}
      className={cx(styles.button, buttonStyle(), customStyles)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
