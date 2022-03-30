import { Component } from 'react';

import DefaultLayout from '@layouts/DefaultLayout';

const CardsPage = () => {
  return <>CardsPage</>;
};

CardsPage.getLayout = (page: Component) => <DefaultLayout title="Cards">{page}</DefaultLayout>;

export default CardsPage;
