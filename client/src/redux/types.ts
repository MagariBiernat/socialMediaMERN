import { ErrorsRegisterAndLoginFromServer } from "../utils/interfaces"

// errors types

export const GET_ERRORS = "GET_ERRORS"
export const EMPTY_ERRORS = "EMPTY_ERRORS"
export const REGISTERED_SUCCESSFUL = "REGISTERED_SUCCESSFUL"
export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const USER_LOADING = "USER_LOADING"
export const USER_LOGOUT = "USER_LOGOUT"

//userReducer
export const USER_DATA = "USER_DATA"

export interface IUserData {
  firstName: String
  secondName?: String
  lastName: String
  nickname?: String
  gender: String
  email: String
  createdAt: String
}

export interface IAuthState {
  isAuthenticated: boolean
  user: T_SET_CURRENT_USER
  loading: boolean
  registered: boolean
}

export type ERRORS = ErrorsRegisterAndLoginFromServer

export type T_USER_LOADING = boolean

export type T_SET_CURRENT_USER = {
  id?: String
  email?: String
  iat?: number
  exp?: number
}

export interface ActionType<T> {
  type:
    | typeof GET_ERRORS
    | typeof SET_CURRENT_USER
    | typeof USER_LOADING
    | typeof USER_LOGOUT
    | typeof EMPTY_ERRORS
    | typeof REGISTERED_SUCCESSFUL
    | typeof USER_DATA
  payload?: ERRORS | T_SET_CURRENT_USER | T_USER_LOADING | IUserData | T
}
