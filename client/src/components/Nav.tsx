import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/reducers/rootReducer"
import { userLogout } from "../redux/actions/authActions"
import { Link } from "react-router-dom"

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
        className="flex justify-between items-center h-16 bg-white text-black relative shadow-lg font-mono p-8 border-b-2 border-black-200"
        role="navigation"
      >
        <Link to="/">socialMedia</Link>

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
              <button onClick={handleLogout}>Log out</button>
            </>
          )}
        </div>
      </nav>
    </>
  )
}

export default Nav
