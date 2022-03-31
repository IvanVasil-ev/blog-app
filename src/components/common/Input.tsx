import { ChangeEvent } from 'react';
import cx from 'clsx';

import styles from '@styles/components/Input.module.scss';

interface InputPropTypes {
  type?: string;
  label?: string;
  error?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  placeholder?: string;
  isDisabled?: boolean;
  customStyles?: string;
  wrapperStyles?: string;
}

const Input = ({
  value,
  error = '',
  label,
  type = 'text',
  placeholder = '',
  onChange,
  onBlur = () => false,
  onFocus = () => false,
  isDisabled,
  customStyles,
  wrapperStyles,
}: InputPropTypes) => {
  return (
    <div className={cx(styles.container, wrapperStyles)}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        className={cx(styles.input, customStyles, error && styles.inputError)}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={isDisabled}
        placeholder={placeholder}
      />
      <div className={styles.errorWrapper}>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    </div>
  );
};

export default Input;
