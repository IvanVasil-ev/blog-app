import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
