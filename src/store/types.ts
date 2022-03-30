import { Method } from 'axios';

type HeadersProps = {
  accept: string;
};

export type ServerRequest = {
  method: Method;
  url: string;
  Headers: HeadersProps;
};

export type ServerRequestWithData = ServerRequest & { data: any };
