import cx from 'clsx';

import styles from '@styles/components/Input.module.scss';

interface InputPropTypes {
  type?: string;
  value: string;
  onChange: () => boolean;
  placeholder?: string;
  customStyles?: any;
}

const Input = ({
  value,
  type = 'text',
  placeholder = '',
  onChange = () => false,
  customStyles,
}: InputPropTypes) => {
  return (
    <input
      className={cx(styles, customStyles)}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
