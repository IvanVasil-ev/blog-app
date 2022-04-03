import { AuthorizationModels } from '../../models';
import * as actionTypes from '../actionsList';

import { AuthorizationState, AuthorizationActionTypes } from './types';

const INITIAL_STATE: AuthorizationState = {
  isLoading: false,
  errorMessage: null,
};

function reducer(state = INITIAL_STATE, action: AuthorizationActionTypes): AuthorizationState {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOGIN_PENDING: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    }
    case actionTypes.LOGIN_SUCCESSFUL: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    }
    case actionTypes.LOGIN_REJECTED: {
      const error = payload as AuthorizationModels.ErrorRepsonse;
      return {
        ...state,
        isLoading: false,
        errorMessage: error.message,
      };
    }
    default:
      return state;
  }
}

export default reducer;
