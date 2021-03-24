const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create User Schema
const PostsSchema = new Schema({})

module.exports = User = mongoose.model("posts", PostsSchema)
