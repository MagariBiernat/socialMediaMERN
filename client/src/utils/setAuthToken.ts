import axios from "axios"

const setAuthToken = (token: String) => {
  if (token) {
    //Apply auth token to every request
    axios.defaults.headers.common["Authorization"] = token
  } else {
    delete axios.defaults.headers.common["Authorization"]
  }
}

export default setAuthToken
