import { AuthorizationModels } from '../../models';
import * as types from '../actionsList';
import {
  LoginPendingActionType,
  LoginSuccessfulActionType,
  LoginRejectedActionType,
} from './types';

export const loginPending = (
  payload: AuthorizationModels.LoginRequest
): LoginPendingActionType => ({
  type: types.LOGIN_PENDING,
  payload,
});

export const loginSuccessful = (
  payload: AuthorizationModels.LoginResponse
): LoginSuccessfulActionType => ({
  type: types.LOGIN_SUCCESSFUL,
  payload,
});

export const loginRejected = (
  payload: AuthorizationModels.ErrorRepsonse
): LoginRejectedActionType => ({
  type: types.LOGIN_REJECTED,
  payload,
});
