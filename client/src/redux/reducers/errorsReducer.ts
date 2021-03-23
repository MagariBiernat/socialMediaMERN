import { ActionType, ERRORS, GET_ERRORS } from "../types"

const initialState = {}

const errorReducer = (state = initialState, action: ActionType<ERRORS>) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload
    default:
      return state
  }
}

export default errorReducer
