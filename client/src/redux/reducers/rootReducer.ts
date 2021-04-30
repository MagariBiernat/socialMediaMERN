import { combineReducers } from "redux"
import {
  ErrorsRegisterAndLoginFromServer,
  IAuthState,
  IPost,
  IUserData,
} from "../../utils/interfaces"
import authReducer from "./authReducer"
import errorsReducer from "./errorsReducer"
import postsReducer from "./postsReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
  errors: errorsReducer,
  auth: authReducer,
  user: userReducer,
  posts: postsReducer,
})

export interface RootState {
  errors: ErrorsRegisterAndLoginFromServer
  auth: IAuthState
  user: IUserData
  posts: { didChange: boolean; posts: { data: [IPost]; postsCount: number } }
}

export default rootReducer
