import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { RootState } from "../redux/reducers/rootReducer"
import { userLogout } from "../redux/actions/authActions"
import { NavAuthenticated, NavNotAuthenticated } from "./style/NavStyle"
import { CgLogOut as LogoutIcon } from "react-icons/cg"
import { AiOutlineHome as HomeIcon } from "react-icons/ai"
import { BsInfoCircle as InfoIcon } from "react-icons/bs"
import headerImage from "../assets/images/menuNavAuthen.png"

import { Link } from "react-router-dom"

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

  const handleMyProfile = () => {
    history.push("/app/myProfile")
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
          <img src={headerImage} alt="headerImage" />
          <div>
            <div className="menu-element">
              <HomeIcon /> <Link to="/app">Home</Link>
            </div>
            <div className="menu-element">
              <InfoIcon />
              <Link to="/app/profile">Profile</Link>
            </div>
            <div className="menu-element">
              <Link to="/app/profile">Profile</Link>
            </div>
          </div>
          <div className="menu-element" onClick={handleLogout}>
            <LogoutIcon /> <p>Log Out</p>
          </div>
        </NavAuthenticated>
      )}
    </>
  )
}

export default Nav
