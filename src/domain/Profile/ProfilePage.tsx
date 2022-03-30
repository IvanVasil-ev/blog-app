import { Component } from 'react';

import DefaultLayout from '@layouts/DefaultLayout';

const ProfilePage = () => {
  return <>ProfilePage</>;
};

ProfilePage.getLayout = (page: Component) => <DefaultLayout title="Profile">{page}</DefaultLayout>;

export default ProfilePage;
