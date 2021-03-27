import { ActionType, IUserData, USER_DATA } from "../types"

const initialState = {
  firstName: "",
  secondName: "",
  lastName: "",
  nickname: "",
  gender: "",
  email: "",
  createdAt: "",
}

const userReducer = (
  state: IUserData = initialState,
  action: ActionType<IUserData>
) => {
  switch (action.type) {
    case USER_DATA:
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}

export default userReducer
