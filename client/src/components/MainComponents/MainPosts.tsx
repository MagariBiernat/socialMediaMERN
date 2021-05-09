import axios from "axios"
import React, { useState, useEffect } from "react"
import { FiHeart as LikeIcon } from "react-icons/fi"
import {
  CgMenuRight as MenuIcon,
  CgProfile as ProfileIcon,
} from "react-icons/cg"
import { FaRegComment as CommentIcon } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import {
  deletePost,
  likePost,
  unlikePost,
} from "../../redux/actions/postsActions"
import { RootState } from "../../redux/reducers/rootReducer"
import { IPost } from "../../utils/interfaces"
import PostModal from "./PostModal"

interface IProps {
  allPosts: Array<IPost>
}

function MainPosts({ allPosts }: IProps) {
  const { id } = useSelector((state: RootState) => state.auth.user)
  const [postIdForModal, setPostIdForModal] = useState<string>("")
  const [modalFullPost, setModalFullPost] = useState<boolean>(false)
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

  const handleShowFullPost = async (postId: string) => {
    await setPostIdForModal(postId)
    setModalFullPost(!modalFullPost)
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
              <ProfileIcon
                style={{
                  height: "28px",
                  width: "32px",
                }}
                className=" cursor-pointer "
              />
              <p className="mx-6 font-bold text-lg">
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
          <div className="flex flex-row justify-between p-2 pt-4 mt-6 border-t-2">
            <div className="flex flex-row ">
              <div
                className="flex flex-row  pb-1 items-center "
                style={{ minWidth: "100px" }}
              >
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
              <div className="flex flex-row  pb-1 items-center">
                <CommentIcon
                  style={{
                    height: "28px",
                    width: "24px",
                  }}
                  className="mr-1 cursor-pointer"
                  onClick={() => handleShowFullPost(item._id)}
                />
                <p className="text-xl ml-2 font"> {item.comments.length}</p>
              </div>
            </div>
            <div
              className="mr-4 cursor-pointer"
              onClick={() => handleShowFullPost(item._id)}
            >
              <p>See full post</p>
            </div>
          </div>
        </div>
      ))}
      {postIdForModal.length > 0 && (
        <PostModal
          handleClose={() => setModalFullPost(!modalFullPost)}
          show={modalFullPost}
          usersId={id ? id : ""}
          postId={postIdForModal}
          handleLikePost={handleLikePost}
        />
      )}
    </>
  )
}

export default MainPosts
