import axios from "axios"
import { ActionType, ADD_NEW_POST, GET_POSTS } from "../types"
import { Dispatch } from "redux"
import {
  IDeletePost,
  ILikedPost,
  INewPost,
  IPost,
} from "../../utils/interfaces"

export const getPosts = () => (dispatch: Dispatch<ActionType<IPost>>) => {
  // todo: implement loading
  // ! error handling dispatch -> errorsReducers
  console.log("getPosts")
  try {
    axios
      .get("/posts/")
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
          dispatch({ type: GET_POSTS, payload: response.data })
        }
      })
      .catch((error) => console.log(error))
  } finally {
  }
}

export const deletePost = (data: IDeletePost) => (
  dispatch: Dispatch<ActionType<IPost>>
) => {
  try {
    axios
      .post("/posts/delete", {
        postId: data.postId,
        usersId: data.usersId,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: ADD_NEW_POST })
        }
      })
      .catch((error) => console.log(error.response))
  } finally {
  }
}

export const newPost = (data: INewPost) => (
  dispatch: Dispatch<ActionType<IPost>>
) => {
  try {
    axios
      .post("/posts/newPost", {
        title: data.title,
        content: data.content ? data.content : "",
        postedBy: data.postedBy,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: ADD_NEW_POST })
        }
      })
      .catch((error) => console.log(error.response))
  } finally {
  }
}

export const unlikePost = (data: ILikedPost) => (
  dispatch: Dispatch<ActionType<IPost>>
) => {
  try {
    axios
      .post("/posts/unlikePost", { postId: data.postId, likedBy: data.likedBy })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: ADD_NEW_POST })
        }
      })
      .catch((error) => console.log(error.response))
  } finally {
  }
}

export const likePost = (data: ILikedPost) => (
  dispatch: Dispatch<ActionType<IPost>>
) => {
  try {
    axios
      .post("/posts/likePost", { postId: data.postId, likedBy: data.likedBy })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: ADD_NEW_POST })
        }
      })
      .catch((error) => console.log(error.response))
  } finally {
  }
}
