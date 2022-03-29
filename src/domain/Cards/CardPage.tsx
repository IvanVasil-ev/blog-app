import DefaultLayout from '@layouts/DefaultLayout';

const CardPage = () => {
  return <>CardPage</>;
};

CardPage.getLayout = (page: any) => <DefaultLayout title="Card">{page}</DefaultLayout>;

export default CardPage;
