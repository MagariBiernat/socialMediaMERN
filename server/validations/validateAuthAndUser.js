const jwtDecode = require("jwt-decode")
const validateUserExists = require("./validateUserIdExists")

module.exports = async function validateAuth(data) {
  var results = {}

  const idFromToken = jwtDecode(data.token)
  results.token = idFromToken.id === data.postedBy

  await validateUserExists(data.postedBy)
    .then(() => {
      results.user = true
    })
    .catch(() => {
      results.user = false
    })
  results.isValid = results.token && results.user
  return results.isValid
}
