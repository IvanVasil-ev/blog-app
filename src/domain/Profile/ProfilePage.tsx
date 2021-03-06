import { Component } from 'react';
import { useRouter } from 'next/router';
import cx from 'clsx';

import DefaultLayout from '@layouts/DefaultLayout';
import Button from '@components/common/Button';
import Divider from '@components/common/Divider';
import styles from '@styles/pages/Profile.module.scss';

const ProfilePage = () => {
  const router = useRouter();

  return (
    <div className={cx('container', styles.profileContainer)}>
      <div className={styles.leftSide}>
        <div className={cx('card', styles.profileCard)}>
          <div className={styles.avatar} />
          <Button mode="contained" onClick={() => router.push('/settings')}>
            Settings
          </Button>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className="card">
          <span className={styles.username}>Ivan Vasilev</span>
          <Divider />
          <div className={styles.infoWrapper}>
            <span className={styles.infoQuestion}>Age:</span>
            <span className={styles.infoAnswer}>21</span>
          </div>
          <div className={styles.infoWrapper}>
            <span className={styles.infoQuestion}>Profession:</span>
            <span className={styles.infoAnswer}>Fronted Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfilePage.getLayout = (page: Component) => <DefaultLayout title="Profile">{page}</DefaultLayout>;

export default ProfilePage;
