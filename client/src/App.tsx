import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
import { userLogout } from "./redux/actions/authActions"
import { RootState } from "./redux/reducers/rootReducer"
import AuthRoute from "./utils/authRoute"
import axiosDefaults from "./utils/axiosDefaults"
import Home from "./views/Home"
import Login from "./views/Login"
import Main from "./views/Main"
import Register from "./views/Register"

axiosDefaults()

function App() {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  )

  const dispatch = useDispatch()

  if (isAuthenticated) {
    if (user.exp) {
      if (Date.now() > user?.exp * 1000) {
        dispatch(userLogout())
      }
    }
  } else {
    dispatch(userLogout())
  }

  return (
    <Router>
      <div className="relative h-screen">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <AuthRoute
            path="/login"
            authVariant={false}
            exact
            Component={Login}
            isAuthenticated={isAuthenticated}
          />
          <AuthRoute
            path="/register"
            authVariant={false}
            exact
            Component={Register}
            isAuthenticated={isAuthenticated}
          />
          <AuthRoute
            authVariant={true}
            path="/app"
            Component={Main}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
