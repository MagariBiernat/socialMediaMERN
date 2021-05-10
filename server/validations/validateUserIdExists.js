require("dotenv").config()

const User = require("../models/User")

module.exports = function ValidateUserExists(userId) {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: userId }).then((User) => {
      if (User) {
        resolve()
      } else {
        reject({ message: `${userId} doesn't exist`, type: "resolve" })
      }
    })
  })
}
