import axios from "axios"

const setAuthToken = (token: String | boolean) => {
  if (token) {
    //Apply auth token to every request
    axios.defaults.headers.common["Authorization"] = "jwt " + token
  } else {
    delete axios.defaults.headers.common["Authorization"]
  }
}

export default setAuthToken
