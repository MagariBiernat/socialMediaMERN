import axios from "axios"
import React, { useState, useEffect } from "react"
import { BiSave as SaveIcon } from "react-icons/bi"
import { FiHeart as LikeIcon } from "react-icons/fi"
import { CgMenuRight as MenuIcon } from "react-icons/cg"
import { useDispatch, useSelector } from "react-redux"
import {
  deletePost,
  likePost,
  unlikePost,
} from "../../redux/actions/postsActions"
import { RootState } from "../../redux/reducers/rootReducer"
import { IPost } from "../../utils/interfaces"

interface IProps {
  allPosts: Array<IPost>
}

function MainPosts({ allPosts }: IProps) {
  const { id } = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()

  const handleDeletePost = (postId: string) => {
    dispatch(deletePost({ postId: postId, usersId: id ? id : "" }))
  }

  const handleLikePost = (post: IPost) => {
    console.log(post)
    if (post.likedBy.filter((item) => item._id === id).length > 0) {
      dispatch(unlikePost({ postId: post._id, likedBy: id ? id : "" }))
    } else {
      dispatch(likePost({ postId: post._id, likedBy: id ? id : "" }))
    }
  }

  return (
    <>
      {allPosts.map((item: IPost, index) => (
        <div
          key={index}
          className="flex flex-col p-2 bg-white mt-5 shadow-xl rounded-xl"
        >
          <div className="flex p-2 justify-between items-center">
            <div className="flex flex-row align-baseline items-start">
              <svg
                style={{ width: "26px", height: "26px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="1 1 20 20"
                fill="#2132dd"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="mx-6 font-bold text-md">
                {item.postedBy.firstName} {item.postedBy.lastName}
              </p>
            </div>
            <MenuIcon
              onClick={() => handleDeletePost(item._id)}
              className=" ml-4 cursor-pointer"
              style={{ height: "24px" }}
            />
          </div>
          <div className="flex flex-col p-2">
            <h2 className="text-xl py-4">{item?.title}</h2>{" "}
            <p>{item?.content}</p>
          </div>
          <div className="flex flex-row p-2 pt-4 mt-6 border-t-2">
            <div className="flex flex-row  pb-1 items-center">
              <LikeIcon
                style={{
                  height: "28px",
                  width: "24px",
                  fill:
                    item.likedBy.filter((item) => item._id === id).length > 0
                      ? "red"
                      : "",
                  color:
                    item.likedBy.filter((item) => item._id === id).length > 0
                      ? "red"
                      : "inherit",
                }}
                className="mr-1 cursor-pointer"
                onClick={() => handleLikePost(item)}
              />
              <p className="text-xl ml-2 font"> {item.likes}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default MainPosts
