const Validator = require("validator")
const isEmpty = require("is-empty")

module.exports = function validateEmail(data) {
  let errors = {}

  data.email = !isEmpty(data.email) ? data.email : ""

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required"
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid"
  }

  return { errors: errors, isValid: isEmpty(errors) }
}
