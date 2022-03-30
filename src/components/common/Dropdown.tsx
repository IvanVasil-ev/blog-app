import { useState } from 'react';
import cx from 'clsx';

import Button from '@components/common/Button';
import styles from '@styles/components/Dropdown.module.scss';

type DataTypes = {
  title: string;
  onClick: () => void;
};

interface DropdownPropTypes {
  children: string | JSX.Element;
  data?: DataTypes[];
  wrapperStyles?: string;
  dropStyles?: string;
}

const Dropdown = ({ children, data, wrapperStyles, dropStyles }: DropdownPropTypes) => {
  const [isOpened, setOpened] = useState(false);

  const onClickHandler = (onClick: () => void) => {
    onClick();
    setOpened(false);
  };

  return (
    <div>
      <Button
        customStyles={cx(styles.container, wrapperStyles)}
        onClick={() => setOpened(!isOpened)}
      >
        {children}
      </Button>
      {isOpened && (
        <>
          <div aria-hidden="true" onClick={() => setOpened(false)} className={styles.backdrop} />
          <div className={cx(styles.drop, dropStyles)}>
            {data?.map(({ title, onClick }) => (
              <Button
                key={title}
                onClick={() => onClickHandler(onClick)}
                customStyles={styles.dropButton}
              >
                {title}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
