import { ActionType, EMPTY_ERRORS, ERRORS, GET_ERRORS } from "../types"

const initialState = {}

const errorReducer = (state = initialState, action: ActionType<ERRORS>) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload
    case EMPTY_ERRORS:
      return initialState
    default:
      return state
  }
}

export default errorReducer
