import React, { useState, useRef, useEffect } from "react"
import { useDispatch } from "react-redux"
import { newPost } from "../../redux/actions/postsActions"
import { INewPost } from "../../utils/interfaces"

interface IProps {
  handleClose: () => void
  show: boolean
  id: string | undefined
}

const AddPostModal: React.FC<IProps> = ({ handleClose, show, id }: IProps) => {
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const overlayRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  useEffect(() => {
    document.addEventListener("click", handleCloseOverlay, false)
    document.addEventListener(
      "keydown",
      handleCloseOverlayOnEscapePressed,
      false
    )

    return () => {
      document.removeEventListener("click", handleCloseOverlay, false)
      document.removeEventListener(
        "keydown",
        handleCloseOverlayOnEscapePressed,
        false
      )
    }
  })

  const handleCloseOverlayOnEscapePressed = (event: any) => {
    if (show) {
      if (event.keyCode === 27) {
        handleClose()
      }
    }
  }

  const handleCloseOverlay = (event: any) => {
    const overlay = overlayRef.current
    if (overlay === event.target) {
      handleClose()
    }
  }

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()

    if (title.length > 0 && content.length > 0) {
      const post: INewPost = {
        title: title,
        content: content,
        postedBy: id ? id.toString() : "",
      }
      dispatch(newPost(post))
      handleClose()
      return
    }

    alert("Pls type something")
  }

  const showHideClassName = show ? "modal block  " : "modal hidden"
  return (
    <div ref={overlayRef} className={showHideClassName}>
      <section className="modal-main flex flex-col rounded-2xl ">
        <header className="flex flex-row justify-between items-center p-6 border-b-2 bg-blue-500 rounded-t-xl">
          <h1 className="text-white text-xl font-bold">Add a new post</h1>
          <button
            className="cursor-pointer text-white text-xl font-bold"
            onClick={handleClose}
          >
            X
          </button>
        </header>
        <form onSubmit={handleSubmitForm}>
          <div className="p-6 flex flex-col">
            <div className="mb-6">
              <p className="py-2 text-xl font-medium">Title</p>
              <input
                className="w-full border-2 py-2 pl-2 rounded-md shadow-lg"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <p className="py-2">Content</p>
              <input
                className="w-full border-2 py-2 pl-2 rounded-md shadow-lg"
                type="text"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <div className=" flex flex-row justify-evenly items-center">
            <button
              className="transition duration-500 ease-in-out p-2 bg-gray-300  transform hover:bg-gray-400 px-5 text-black rounded-md cursor-pointer"
              type="button"
            >
              Attach Image
            </button>
            <button
              className="transition duration-500 ease-in-out p-2 bg-gray-300  transform hover:bg-gray-400 px-5 text-black rounded-md cursor-pointer"
              type="button"
            >
              Tag Friends
            </button>
          </div>
          <div className="flex flex-row justify-end p-6">
            <button
              className="transition duration-500 ease-in-out p-2 bg-red-500  transform hover:bg-red-600 px-5 text-white rounded-md cursor-pointer mr-2"
              type="button"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="transition duration-500 ease-in-out p-2  bg-blue-500 px-5 text-white rounded-md cursor-pointer transform hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AddPostModal
