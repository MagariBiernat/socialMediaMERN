import axios from "axios"
import setAuthToken from "../../utils/setAuthToken"
import jwtDecode from "jwt-decode"
import {
  ActionType,
  ERRORS,
  SET_CURRENT_USER,
  T_SET_CURRENT_USER,
  T_USER_LOADING,
  USER_LOADING,
  USER_LOGOUT,
} from "../types"
import { Dispatch } from "redux"
import {
  UserLoginCredentials,
  UserRegisterCredentials,
} from "../../utils/interfaces"

const jwtTokenKey = "jwtToken"

export const registerUser = (userData: UserRegisterCredentials) => (
  dispatch: Dispatch<ActionType<ERRORS>>
) => {
  try {
    dispatch({ type: USER_LOADING, payload: true })

    axios
      .post("/users/register", userData)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.response)
      })
  } finally {
    dispatch({ type: USER_LOADING, payload: false })
  }
}

export const loginUser = (userData: UserLoginCredentials) => (
  dispatch: Dispatch<ActionType<T_USER_LOADING | T_SET_CURRENT_USER>>
) => {
  try {
    dispatch({ type: USER_LOADING, payload: true })

    axios
      .post("/users/login", userData)
      .then((response) => {
        if (response?.data?.success) {
          console.log(jwtDecode(response.data.token))
          return response.data.token.split("Bearer ")[1]
        } else {
          throw Error("Error occured")
        }
      })
      .then((token) => {
        localStorage.setItem(jwtTokenKey, token)
        setAuthToken(token)
        const decoded: T_SET_CURRENT_USER = jwtDecode(token)
        dispatch({ type: SET_CURRENT_USER, payload: decoded })
      })
      .catch((error) => {
        console.log(error, error.response)
      })
  } finally {
    dispatch({ type: USER_LOADING, payload: false })
  }
}

export const userLogout = () => (dispatch: Dispatch<ActionType<undefined>>) => {
  localStorage.removeItem(jwtTokenKey)
  setAuthToken(false)
  dispatch({ type: USER_LOGOUT })
}
