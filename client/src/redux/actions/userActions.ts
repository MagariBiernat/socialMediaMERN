import axios from "axios"
import { Dispatch } from "redux"
import { IUserData } from "../../utils/interfaces"
import { ActionType, GET_ERRORS, USER_DATA, USER_LOADING } from "../types"
import { dispatchLoadingAndEmptyErrors } from "./authActions"

export const getUserData = (email?: String) => (
  dispatch: Dispatch<ActionType<IUserData>>
) => {
  if (!email) return
  console.log(email)
  try {
    dispatchLoadingAndEmptyErrors(dispatch)

    axios
      .post("/users/profile", { email })
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          console.log("dispatching...", response.data)
          dispatch({ type: USER_DATA, payload: response.data })
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ERRORS,
          payload: { message: "Error fetching data" },
        })
      })
  } finally {
    dispatch({ type: USER_LOADING, payload: false })
  }
}
