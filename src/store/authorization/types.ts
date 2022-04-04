import { AuthorizationModels } from '@models';
import * as actionsTypes from '../actionsList';

type User = {
  email?: string;
  name?: string;
  surname?: string;
  age?: string;
  profession?: string;
  password?: string;
};

export type AuthorizationState = {
  isLoading: boolean;
  errorMessage: string | null;
  accountConfirmed: boolean;
  token: string | null;
  currentUser: User | null;
};

export interface LoginPendingActionType {
  type: typeof actionsTypes.LOGIN_PENDING;
  payload: AuthorizationModels.LoginRequest;
}

export interface LoginSuccessfulActionType {
  type: typeof actionsTypes.LOGIN_SUCCESSFUL;
  payload: AuthorizationModels.LoginResponse;
}

export interface LoginRejectedActionType {
  type: typeof actionsTypes.LOGIN_REJECTED;
  payload: AuthorizationModels.ErrorRepsonse;
}

export type AuthorizationActionTypes =
  | LoginPendingActionType
  | LoginSuccessfulActionType
  | LoginRejectedActionType;
