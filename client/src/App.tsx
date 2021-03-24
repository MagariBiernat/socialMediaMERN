import axios from "axios"
import React from "react"
import { useSelector } from "react-redux"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import Nav from "./components/Nav"
import { RootState } from "./redux/reducers/rootReducer"
import AuthRoute from "./utils/authRoute"
import Login from "./views/Login"
import Main from "./views/Main"
import Register from "./views/Register"

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  console.log(isAuthenticated)
  // const [authToken, setAuthToken] = useState(
  //   localStorage.getItem("token") || ""
  // )
  axios.defaults.baseURL = "http://localhost:3000"
  axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8"
  axios.defaults.timeout = 3000
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*"
  // axios.defaults.headers.common
  axios.defaults.headers.post["Accepter"] = "application/json"

  return (
    <Router>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <h2>home </h2>
        </Route>
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
        {/* <Route path="/app" component={App} /> */}
      </Switch>
    </Router>
  )
}

export default App
