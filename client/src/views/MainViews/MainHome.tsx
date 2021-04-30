import axios from "axios"
import React, { useState, useEffect } from "react"
import { userLogout } from "../../redux/actions/authActions"
import { BiSave as SaveIcon, BiLike as LikeIcon } from "react-icons/bi"
import { CgMenuRight as MenuIcon } from "react-icons/cg"
import MainHomeTopAddPost from "../../components/MainComponents/MainHomeTopAddPost"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../../redux/actions/postsActions"
import { RootState } from "../../redux/reducers/rootReducer"
import MainPosts from "../../components/MainComponents/MainPosts"

function MainHome() {
  // const [posts, setPosts] = useState<Array<IPost>>([])
  const { didChange, posts } = useSelector((state: RootState) => state.posts)
  const { data, postsCount } = posts
  const dispatch = useDispatch()

  console.log(data.length, postsCount)
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if (didChange) {
    dispatch(getPosts())
  }

  // const handleDeletePost = (_id: String) => {
  //   axios
  //     .post("/posts/delete", { postId: _id })
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((err) => console.log(err))
  // }

  return (
    <div className=" max-h-screen overflow-y-scroll hideScrollBar">
      <MainHomeTopAddPost />
      <div className=" py-6">
        {data?.length > 0 ? <MainPosts allPosts={data} /> : <p>No posts yet</p>}
      </div>
    </div>
  )
}

export default MainHome
