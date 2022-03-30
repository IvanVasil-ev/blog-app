import { all } from 'redux-saga/effects';

import authorization from './authorization/sagas';

function* rootSaga() {
  yield all([...authorization()]);
}

export default rootSaga;
