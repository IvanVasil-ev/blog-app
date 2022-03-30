import axios, { AxiosRequestConfig } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { BASE_URL } from '@config';
import { ServerRequestWithData } from '../types';
import * as actionTypes from '../actionsList';
import { loginPending, loginSuccessful, loginRejected } from './actions';

const apiCall = (config: AxiosRequestConfig<ServerRequestWithData>) => axios(config);

function* login({ payload }: ReturnType<typeof loginPending>) {
  try {
    const config: ServerRequestWithData = {
      method: 'POST',
      url: BASE_URL,
      Headers: {
        accept: '',
      },
      data: payload,
    };

    const { data } = yield call<typeof apiCall>(apiCall, config);

    if (data) {
      yield put(loginSuccessful(data));
    }
  } catch (e) {
    const error = e as Error;
    yield put(loginRejected(error));
  }
}

function* watch(): Generator {
  yield takeLatest(actionTypes.LOGIN_PENDING, login);
}

export default watch;
