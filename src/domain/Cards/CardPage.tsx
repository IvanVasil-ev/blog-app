import { Component } from 'react';

import DefaultLayout from '@layouts/DefaultLayout';

const CardPage = () => {
  return <>CardPage</>;
};

CardPage.getLayout = (page: Component) => <DefaultLayout title="Card">{page}</DefaultLayout>;

export default CardPage;
