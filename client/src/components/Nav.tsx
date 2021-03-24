import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { RootState } from "../redux/reducers/rootReducer"
import { userLogout } from "../redux/actions/authActions"

function Nav() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )
  const history = useHistory()
  const dispatch = useDispatch()
  // console.log("adf")

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
    <div>
      <h2>nav</h2>
      <button onClick={handleRedirectToLogin}>Login</button>
      <button onClick={handleRedirectToRegister}>Register</button>
      {isAuthenticated && <button onClick={handleLogout}>Log out</button>}
    </div>
  )
}

export default Nav
