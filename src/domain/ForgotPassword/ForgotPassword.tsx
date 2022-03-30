import { Component } from 'react';

import AuthorizationLayout from '@layouts/AuthorizationLayout';

const ForgotPasswordPage = () => {
  return <>ForgotPassword</>;
};

ForgotPasswordPage.getLayout = (page: Component) => (
  <AuthorizationLayout title="Forgot password">{page}</AuthorizationLayout>
);

export default ForgotPasswordPage;
