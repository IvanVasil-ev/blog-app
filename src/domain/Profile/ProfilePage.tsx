import DefaultLayout from '@layouts/DefaultLayout';

const ProfilePage = () => {
  return <>ProfilePage</>;
};

ProfilePage.getLayout = (page: any) => <DefaultLayout title="Profile">{page}</DefaultLayout>;

export default ProfilePage;
