import React from "react"
import { useHistory } from "react-router"

function Nav() {
  const history = useHistory()
  console.log("adf")

  const handleRedirectToLogin = () => {
    history.push("/login")
  }

  const handleRedirectToRegister = () => {
    history.push("/register")
  }
  return (
    <div>
      <h2>nav</h2>
      <button onClick={handleRedirectToLogin}>Login</button>
      <button onClick={handleRedirectToRegister}>Register</button>
    </div>
  )
}

export default Nav
