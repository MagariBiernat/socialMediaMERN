import React, { useRef, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/reducers/rootReducer"
import { FiHeart as LikeIcon } from "react-icons/fi"
import { CgProfile as ProfileIcon } from "react-icons/cg"
import { FaRegComment as CommentIcon } from "react-icons/fa"
import { IComments, IPost } from "../../utils/interfaces"
import axios from "axios"

interface IProps {
  handleClose: () => void
  show: boolean
  postId: string
  usersId: string
  handleLikePost: (post: IPost) => void
}

const PostModal: React.FC<IProps> = ({
  handleClose,
  show,
  postId,
  usersId,
  handleLikePost,
}) => {
  const [newCommentValue, setNewCommentValue] = useState<string>("")
  const overlayRef = useRef<HTMLDivElement>(null)
  const showHideClassName = show ? "modal block" : "modal hidden"
  const post = useSelector((state: RootState) =>
    state.posts.posts.data.filter((post) => post._id === postId).length > 0
      ? state.posts.posts.data.filter((post) => post._id === postId)[0]
      : undefined
  )
  useEffect(() => {
    if (postId === "" || usersId === "") {
      handleClose()
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseOverlay, false)
    document.addEventListener(
      "keydown",
      handleCloseOverlayOnEscapePressed,
      false
    )

    return () => {
      document.removeEventListener("mousedown", handleCloseOverlay, false)
      document.removeEventListener(
        "keydown",
        handleCloseOverlayOnEscapePressed,
        false
      )
    }
  })

  const handleCloseOverlay = (event: any) => {
    const overlay = overlayRef.current
    if (overlay === event.target) {
      handleClose()
    }
  }

  const handleCloseOverlayOnEscapePressed = (event: any) => {
    if (show) {
      if (event.keyCode === 27) {
        handleClose()
      }
    }
  }

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault()

    const objekt = {
      commentContent: newCommentValue,
      commentedBy: usersId,
      postId: postId,
    }

    axios
      .post("/posts/comments/addComment", objekt)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return (
    <>
      {post && (
        <div ref={overlayRef} className={showHideClassName}>
          <section className="overlay modal-main flex flex-col rounded-2xl ">
            <header className="flex flex-row justify-between items-center p-6 bg-gray-400 rounded-t-xl">
              <div className="flex flex-row align-baseline justify-center items-start">
                <ProfileIcon
                  style={{
                    fill: "white",
                    color: "white",
                    height: "28px",
                    width: "32px",
                  }}
                  className=" cursor-pointer "
                />
                <p className="mx-6 font-bold text-lg text-white ">
                  {post?.postedBy.firstName} {post?.postedBy.lastName}
                </p>
              </div>
              <button
                className="cursor-pointer text-white text-xl font-bold"
                onClick={handleClose}
              >
                X
              </button>
            </header>

            <div className="flex flex-col px-6">
              <h2 className="text-xl py-4">{post?.title}</h2>{" "}
              <p>{post?.content}</p>
            </div>
            <div className="flex flex-row justify-between  border-t-2 border-b-2 my-2">
              <div className="flex flex-row px-6 py-4">
                <div
                  className="flex flex-row  pb-1 items-center "
                  style={{ minWidth: "100px" }}
                >
                  <LikeIcon
                    style={{
                      height: "28px",
                      width: "24px",
                      fill:
                        post?.likedBy?.filter((post) => post?._id === usersId)
                          .length > 0
                          ? "red"
                          : "",
                      color:
                        post?.likedBy?.filter((post) => post?._id === usersId)
                          .length > 0
                          ? "red"
                          : "inherit",
                    }}
                    className="mr-1 cursor-pointer"
                    onClick={() => handleLikePost(post)}
                  />
                  <p className="text-xl ml-2 font"> {post?.likes}</p>
                </div>
                <div className="flex flex-row  pb-1 items-center">
                  <CommentIcon
                    style={{
                      height: "28px",
                      width: "24px",
                    }}
                    className="mr-1 cursor-pointer"
                  />
                  <p className="text-xl ml-2 font"> {post?.comments?.length}</p>
                </div>
              </div>
            </div>
            {post?.comments?.length > 0 ? (
              <div className="flex flex-col">
                {post?.comments?.map((comment: IComments) => (
                  <div> {comment.content}</div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center my-8">
                <p>No comments yet</p>
              </div>
            )}
            <div className="flex flex-col border-t-2  px-6 py-6 m2-4">
              <form
                className="flex flex-row justify-between "
                onSubmit={handleSubmitForm}
              >
                <input
                  className="w-3/4 bg-gray-200 pl-2 rounded-md"
                  type="text"
                  placeholder="Comment here..."
                  onChange={(e) => setNewCommentValue(e.target.value)}
                />
                <button
                  className=" bg-blue-500 text-white p-3 px-5 rounded-md"
                  type="submit"
                >
                  Post a comment
                </button>
              </form>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default PostModal
