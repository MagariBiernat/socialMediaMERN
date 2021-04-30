const Validator = require("validator")
const isEmpty = require("is-empty")

module.exports = function validatePostsInput(data) {
  let errors = {}

  data.title = !isEmpty(data.title) ? data.title : ""
  data.postedBy = !isEmpty(data.postedBy) ? data.postedBy : ""

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required"
  }

  if (Validator.isEmpty(data.postedBy)) {
    errors.postedBy = "Author's ID not specified. Problem with authorization."
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
