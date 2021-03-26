import {
  SET_CURRENT_USER,
  USER_LOADING,
  ActionType,
  T_USER_LOADING,
  T_SET_CURRENT_USER,
  IAuthState,
  USER_LOGOUT,
  REGISTERED_SUCCESSFUL,
} from "../types"

const isEmpty = require("is-empty")

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  registered: false,
}

const authReducer = (
  state: IAuthState = initialState,
  action: ActionType<T_USER_LOADING | T_SET_CURRENT_USER>
) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      }
    case USER_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case REGISTERED_SUCCESSFUL:
      return {
        ...state,
        registered: true,
      }
    case USER_LOGOUT:
      return initialState
    default:
      return state
  }
}

export default authReducer
