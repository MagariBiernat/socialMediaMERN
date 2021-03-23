import axios from "axios"
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Login from "./views/Login"
import Register from "./views/Register"

function App() {
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
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        {/* <Route path="/app" component={App} /> */}
      </Switch>
    </Router>
  )
}

export default App
