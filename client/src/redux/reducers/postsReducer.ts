import { IGetPosts } from "../../utils/interfaces"
import { ActionType, GET_POSTS, GET_MORE_POSTS, ADD_NEW_POST } from "../types"
const initialState = {
  didChange: false,
  posts: { data: [], postsCount: 0 },
}
// const initialState: Array<IPost> = []

const postsReducer = (state = initialState, action: ActionType<IGetPosts>) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        didChange: false,
        posts: action.payload,
      }

    // case GET_MORE_POSTS:
    //   return [...state, action.payload]

    case ADD_NEW_POST:
      return {
        ...state,
        didChange: true,
      }

    default:
      return state
  }
}

export default postsReducer
