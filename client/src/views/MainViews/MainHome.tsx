import axios from "axios"
import React, { useState, useEffect } from "react"
import { userLogout } from "../../redux/actions/authActions"
import { BiSave as SaveIcon, BiLike as LikeIcon } from "react-icons/bi"
import { CgMenuRight as MenuIcon } from "react-icons/cg"

interface IPost {
  _id: String
  title: String
  content: String
  postedBy: {
    firstName: String
    lastName: String
  }
  dateCreated: String
  likes: Number
  saved: Number
}

function MainHome() {
  const [posts, setPosts] = useState<Array<IPost>>([])

  // useEffect(() => {
  //   axios.get("/posts/").then((response) => console.log(response))
  // }, [])

  const getPosts = () => {
    axios
      .get("/posts/")
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
          setPosts(response.data)
        }
      })
      .catch((err) => console.log(err))
  }

  const handleDeletePost = (_id: String) => {
    axios
      .post("/posts/delete", { postId: _id })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-between p-8">
      <div className="flex flex-col">
        <h2>Posts in here</h2>
        <button onClick={getPosts}>get them</button>
        <div>
          {posts.map((item: IPost, index) => (
            <div className="flex flex-col p-2 bg-gray-200 mt-5 shadow-xl rounded-xl">
              <div className="flex p-2 justify-between items-center">
                <svg
                  style={{ width: "24px", height: "24px" }}
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
                <p className="mx-6 font-bold text-lx">
                  {item.postedBy.firstName} {item.postedBy.lastName}
                </p>
                <MenuIcon
                  onClick={() => handleDeletePost(item._id)}
                  className=" ml-4 cursor-pointer"
                  style={{ height: "24px" }}
                />
              </div>
              <div className="flex flex-col p-2">
                <h2 className="text-3xl py-4">{item?.title}</h2>{" "}
                <p>{item?.content}</p>
              </div>
              <div className="flex flex-row p-2">
                <div className="flex flex-row mr-10">
                  <LikeIcon style={{ height: "24px" }} className="mr-1" />
                  <p> {item.likes}</p>
                </div>
                <div className="flex flex-row">
                  <SaveIcon style={{ height: "24px" }} className="mr-1" />
                  <p> {item.saved}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="">Welcome</div>
      </div>
    </div>
  )
}

export default MainHome
