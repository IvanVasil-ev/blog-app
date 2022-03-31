import { ChangeEvent, useState } from 'react';
import cx from 'clsx';

import styles from '@styles/components/Input.module.scss';

interface InputPropTypes {
  type?: string;
  label?: string;
  error?: string;
  value: string;
  description?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  labelStyles?: string;
  customStyles?: string;
  wrapperStyles?: string;
}

const Input = ({
  value,
  error = '',
  description = '',
  label,
  type = 'text',
  placeholder = '',
  onChange,
  onBlur = () => false,
  onFocus = () => false,
  isDisabled,
  isRequired,
  labelStyles,
  customStyles,
  wrapperStyles,
}: InputPropTypes) => {
  const [requiredError, setRequiredError] = useState('');

  const onSelfBlur = () => {
    if (isRequired && !value) {
      return setRequiredError('Заполните поле.');
    }
    return onBlur();
  };

  const onSelfFocus = () => {
    setRequiredError('');
    onFocus();
  };

  return (
    <div className={cx(styles.container, wrapperStyles)}>
      {label && (
        <span className={cx(styles.label, labelStyles)}>
          {label}
          {isRequired && <span className={styles.required}>*</span>}
        </span>
      )}
      <input
        className={cx(styles.input, customStyles, (error || requiredError) && styles.inputError)}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={() => onSelfBlur()}
        onFocus={onSelfFocus}
        disabled={isDisabled}
        placeholder={placeholder}
      />
      <div className={styles.infoWrapper}>
        {!requiredError && !error && description && (
          <span className={styles.description}>{description}</span>
        )}
        {!requiredError && error && <span className={styles.error}>{error}</span>}
        {requiredError && <span className={styles.error}>{requiredError}</span>}
      </div>
    </div>
  );
};

export default Input;
