import { combineReducers } from "redux"
import { ErrorsRegisterAndLoginFromServer } from "../../utils/interfaces"
import { IAuthState, IUserData } from "../types"
import authReducer from "./authReducer"
import errorsReducer from "./errorsReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
  errors: errorsReducer,
  auth: authReducer,
  user: userReducer,
})

export interface RootState {
  errors: ErrorsRegisterAndLoginFromServer
  auth: IAuthState
  user: IUserData
}

export default rootReducer
