import { ErrorsRegisterAndLoginFromServer } from "../utils/interfaces"

// errors types

export const GET_ERRORS = "GET_ERRORS"
export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const USER_LOADING = "USER_LOADING"

export interface IAuthState {
  isAuthenticated: boolean
  user: {
    firstName?: String
    secondName?: String
    lastName?: String
    gender?: String
    email?: String
  }
  loading: boolean
}

export type ERRORS = {
  payload: ErrorsRegisterAndLoginFromServer
}

export type T_USER_LOADING = {
  payload: boolean
}

export type T_SET_CURRENT_USER = {
  payload: {
    firstName: String
    secondName?: String
    lastName: String
    gender: String
    email: String
  }
}

export interface ActionType<T> {
  type: typeof GET_ERRORS | typeof SET_CURRENT_USER | typeof USER_LOADING
  payload?: ERRORS | T_SET_CURRENT_USER | T_USER_LOADING | T
}
