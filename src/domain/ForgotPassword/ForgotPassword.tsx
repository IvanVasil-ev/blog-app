import AuthorizationLayout from '@layouts/AuthorizationLayout';

const ForgotPasswordPage = () => {
  return <>ForgotPassword</>;
};

ForgotPasswordPage.getLayout = (page: any) => (
  <AuthorizationLayout title="Forgot password">{page}</AuthorizationLayout>
);

export default ForgotPasswordPage;
