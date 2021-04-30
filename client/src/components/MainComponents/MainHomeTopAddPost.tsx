import axios from "axios"
import React, { useState } from "react"
import { CgProfile as ProfileIcon } from "react-icons/cg"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/reducers/rootReducer"
import { INewPost } from "../../utils/interfaces"
import { newPost } from "../../redux/actions/postsActions"
import AddPostModal from "./AddPostModal"

// Top bar for a quick post.
interface IProps {
  // getPosts: () => void
}

function MainHomeTopAddPost() {
  const { id } = useSelector((state: RootState) => state.auth.user)
  const [modalShow, setModalShow] = useState<boolean>(false)

  return (
    <div className="flex flex-col mb-6 lg:mb-0 w-100 bg-white  rounded-xl shadow-xl minWidth-200 cursor-pointer">
      <p
        className="text-center h-full p-2"
        onClick={() => setModalShow(!modalShow)}
      >
        Add new post
      </p>
      <AddPostModal
        show={modalShow}
        handleClose={() => {
          setModalShow(!modalShow)
        }}
        id={id ? id : undefined}
      />
    </div>
  )
}

export default MainHomeTopAddPost
