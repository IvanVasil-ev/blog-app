import { combineReducers } from 'redux';

import authorization from './authorization/reducer';

export const rootReducer = combineReducers({
  authorization,
});

export type RootState = ReturnType<typeof rootReducer>;
