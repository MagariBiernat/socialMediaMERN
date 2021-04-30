import axios from "axios"
import setAuthToken from "../../utils/setAuthToken"
import jwtDecode from "jwt-decode"
import {
  ActionType,
  EMPTY_ERRORS,
  ERRORS,
  GET_ERRORS,
  REGISTERED_SUCCESSFUL,
  SET_CURRENT_USER,
  USER_LOADING,
  USER_LOGOUT,
} from "../types"
import { Dispatch } from "redux"
import {
  ISET_CURRENT_USER,
  IUSER_LOADING,
  UserLoginCredentials,
  UserRegisterCredentials,
} from "../../utils/interfaces"

const jwtTokenKey = "jwtToken"

export const registerUser = (userData: UserRegisterCredentials) => (
  dispatch: Dispatch<ActionType<ERRORS>>
) => {
  try {
    dispatchLoadingAndEmptyErrors(dispatch)

    axios
      .post("/users/register", userData)
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: REGISTERED_SUCCESSFUL })

          setTimeout(() => {
            dispatch({ type: REGISTERED_SUCCESSFUL })
          }, 500)
        }
      })
      .catch((error) => {
        dispatch({ type: GET_ERRORS, payload: error.response.data })
      })
  } finally {
    dispatch({ type: USER_LOADING, payload: false })
  }
}

export const loginUser = (userData: UserLoginCredentials) => (
  dispatch: Dispatch<ActionType<IUSER_LOADING | ISET_CURRENT_USER>>
) => {
  try {
    dispatchLoadingAndEmptyErrors(dispatch)

    axios
      .post("/users/login", userData)
      .then((response) => {
        if (response?.data?.success) {
          return response.data.token.split("Bearer ")[1]
        } else {
          throw Error("Error occured")
        }
      })
      .then((token) => {
        localStorage.setItem(jwtTokenKey, token)
        setAuthToken(token)
        const decoded: ISET_CURRENT_USER = jwtDecode(token)
        dispatch({ type: SET_CURRENT_USER, payload: decoded })
      })
      .catch((error) => {
        dispatch({ type: GET_ERRORS, payload: error.response.data })
      })
  } finally {
    dispatch({ type: USER_LOADING, payload: false })
  }
}

export const dispatchLoadingAndEmptyErrors = (
  dispatch: Dispatch<ActionType<IUSER_LOADING | ISET_CURRENT_USER>>
) => {
  dispatch({ type: EMPTY_ERRORS })
  dispatch({ type: USER_LOADING, payload: true })
}

export const userLogout = () => (dispatch: Dispatch<ActionType<undefined>>) => {
  localStorage.removeItem(jwtTokenKey)
  setAuthToken(false)
  dispatch({ type: USER_LOGOUT })
}
