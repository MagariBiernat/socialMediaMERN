import axios from "axios"
import setAuthToken from "../../utils/setAuthToken"
import jwtDecode from "jwt-decode"
import {
  ActionType,
  ERRORS,
  T_SET_CURRENT_USER,
  T_USER_LOADING,
} from "../types"
import { Dispatch } from "redux"
import {
  UserLoginCredentials,
  UserRegisterCredentials,
} from "../../utils/interfaces"

export const registerUser = (userData: UserRegisterCredentials) => (
  dispatch: Dispatch<ActionType<ERRORS>>
) => {
  console.log(userData)
  console.log("hello")
}

export const loginUser = (userData: UserLoginCredentials) => (
  dispatch: Dispatch<ActionType<T_USER_LOADING | T_SET_CURRENT_USER>>
) => {
  console.log(axios.defaults)
  axios
    .post("/users/login", userData)
    .then((response) => console.log(response))
    .catch((error) => console.log(error.response))
}
