import {
  ErrorsRegisterAndLoginFromServer,
  IGetPosts,
  IPost,
  ISET_CURRENT_USER,
  IUserData,
  IUSER_LOADING,
} from "../utils/interfaces"

// errors types

export const GET_ERRORS = "GET_ERRORS"
export const EMPTY_ERRORS = "EMPTY_ERRORS"
export const REGISTERED_SUCCESSFUL = "REGISTERED_SUCCESSFUL"
export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const USER_LOADING = "USER_LOADING"
export const USER_LOGOUT = "USER_LOGOUT"

//userReducer
export const USER_DATA = "USER_DATA"

//postsReducer

export const GET_POSTS = "GET_POSTS"
export const GET_MORE_POSTS = "GET_MORE_POSTS"
export const ADD_NEW_POST = "ADD_NEW_POST"

export type ERRORS = ErrorsRegisterAndLoginFromServer

export interface ActionType<T> {
  type:
    | typeof GET_ERRORS
    | typeof SET_CURRENT_USER
    | typeof USER_LOADING
    | typeof USER_LOGOUT
    | typeof EMPTY_ERRORS
    | typeof REGISTERED_SUCCESSFUL
    | typeof USER_DATA
    | typeof GET_POSTS
    | typeof GET_MORE_POSTS
    | typeof ADD_NEW_POST
  payload?:
    | ERRORS
    | ISET_CURRENT_USER
    | IUSER_LOADING
    | IUserData
    | IPost
    | IGetPosts
    | T
}
