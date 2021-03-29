const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create User Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: true,
    immutable: true,
  },
  email: {
    type: String,
    required: true,
    immutable: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  lastLoggedIn: {
    type: Date,
    required: false,
  },
})

module.exports = User = mongoose.model("users", UserSchema)
