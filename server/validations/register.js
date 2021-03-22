const Validator = require("validator")
const isEmpty = require("is-empty")

module.exports = function validateRegisterInput(data) {
  let errors = {}

  // Converts empty fields to an empty string so we can use validator function
  data.firstName = !isEmpty(data.firstName) ? data.firstName : ""
  data.lastName = !isEmpty(data.lastName) ? data.lastName : ""
  data.gender = !isEmpty(data.gender) ? data.gender : ""
  data.email = !isEmpty(data.email) ? data.email : ""
  data.password = !isEmpty(data.password) ? data.password : ""
  data.password2 = !isEmpty(data.password2) ? data.password2 : ""

  // First name checks
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name field is required"
  }

  // Last name checks
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name field is required"
  }

  // Gender check

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Aye apache helicopterinho"
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required"
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid"
  }

  // Passwords checks

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required"
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required"
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters, up to 30"
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
