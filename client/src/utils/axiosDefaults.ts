import axios from "axios"

export const axiosDefaults = () => {
  axios.defaults.baseURL = "http://localhost:3010"
  axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8"
  axios.defaults.timeout = 3000
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*"
  axios.defaults.headers.post["Accepter"] = "application/json"
}

export default axiosDefaults
