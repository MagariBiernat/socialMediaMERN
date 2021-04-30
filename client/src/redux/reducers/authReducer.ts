import {
  IAuthState,
  IUSER_LOADING,
  ISET_CURRENT_USER,
} from "../../utils/interfaces"
import {
  SET_CURRENT_USER,
  USER_LOADING,
  ActionType,
  USER_LOGOUT,
  REGISTERED_SUCCESSFUL,
} from "../types"
// import isEmpty from 'is-empty'
const isEmpty = require("is-empty")

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  registered: false,
}

const authReducer = (
  state: IAuthState = initialState,
  action: ActionType<IUSER_LOADING | ISET_CURRENT_USER>
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
        registered: !state.registered,
      }
    case USER_LOGOUT:
      return initialState
    default:
      return state
  }
}

export default authReducer
