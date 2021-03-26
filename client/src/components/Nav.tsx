import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { RootState } from "../redux/reducers/rootReducer"
import { userLogout } from "../redux/actions/authActions"
import { NavAuthenticated, NavNotAuthenticated } from "./style/NavStyle"
import { CgLogOut as LogoutIcon } from "react-icons/cg"

function Nav() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )
  const history = useHistory()
  const dispatch = useDispatch()
  // console.log("adf")

  const handleRedirectHome = () => {
    history.push("/")
  }

  const handleRedirectToLogin = () => {
    history.push("/login")
  }

  const handleRedirectToRegister = () => {
    history.push("/register")
  }

  const handleLogout = () => {
    dispatch(userLogout())
  }
  return (
    <>
      {!isAuthenticated ? (
        <NavNotAuthenticated>
          <h6 onClick={handleRedirectHome}>Magic Logo in Here</h6>
          <button onClick={handleRedirectToLogin}>Login</button>
          <button onClick={handleRedirectToRegister}>Register</button>
        </NavNotAuthenticated>
      ) : (
        <NavAuthenticated>
          <div className="menu-element" onClick={handleLogout}>
            <LogoutIcon /> <p>Log Out</p>
          </div>
        </NavAuthenticated>
      )}
    </>
  )
}

export default Nav
