import cx from 'clsx';

import styles from '@styles/components/Divider.module.scss';

interface DividerPropTypes {
  customStyles?: string;
}

const Divider = ({ customStyles }: DividerPropTypes) => {
  return <div className={cx(styles.container, customStyles)} />;
};

export default Divider;
