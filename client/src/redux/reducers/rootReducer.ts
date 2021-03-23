import { combineReducers } from "redux"
import { ErrorsRegisterAndLoginFromServer } from "../../utils/interfaces"
import { IAuthState } from "../types"
import authReducer from "./authReducer"
import errorsReducer from "./errorsReducer"

const rootReducer = combineReducers({
  errors: errorsReducer,
  auth: authReducer,
})

export interface RootState {
  errors: ErrorsRegisterAndLoginFromServer
  auth: IAuthState
}

export default rootReducer
