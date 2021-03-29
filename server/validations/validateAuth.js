const jwtDecode = require("jwt-decode")

module.exports = function validateAuth(data) {
  const idFromToken = jwtDecode(data.token)

  return idFromToken === data.postedBy
}
