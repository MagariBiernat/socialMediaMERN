import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/reducers/rootReducer"
import { userLogout } from "../redux/actions/authActions"
import { Link } from "react-router-dom"
import { CgProfile as ProfileIcon } from "react-icons/cg"
import { IoIosNotificationsOutline as NotifIcon } from "react-icons/io"
import { IoMailOpenOutline as MailIcon } from "react-icons/io5"

function Nav() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(userLogout())
  }

  return (
    <>
      <nav
        className="flex sticky top-0 justify-between items-center h-16 bg-white text-black relative shadow-md font-mono p-8 border-b-5 border-black "
        role="navigation"
      >
        <Link className="font-bold text-blue-700" to="/">
          socialMedia
        </Link>

        <div className="px-4 cursor-pointer md:hidden">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {isAuthenticated && (
          <div className="flex items-center w-2/4 mx-10">
            <input
              className="bg-gray-200 rounded-md py-1 pl-2  w-full text-sm focus:border-none"
              type="search"
              placeholder="Search people..."
            />
          </div>
        )}
        <div className="md:block hidden">
          {!isAuthenticated ? (
            <>
              <Link to="/login">Login</Link>
              <Link className="ml-6" to="/register">
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="flex flex-row items-center">
                <button className="mr-10" onClick={handleLogout}>
                  Log out
                </button>

                <MailIcon
                  className="mr-4 cursor-pointer"
                  style={{ height: "24px", width: "24px" }}
                />
                <NotifIcon
                  className="mr-4 cursor-pointer"
                  style={{ height: "24px", width: "24px" }}
                />
                <ProfileIcon
                  className="cursor-pointer"
                  style={{ height: "24px", width: "24px" }}
                />
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  )
}

export default Nav
