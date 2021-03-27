const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create User Schema
const PostsSchema = new Schema({
  title: {
    type: String,
  },
  content: { type: String },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  dateCreated: { type: Date, default: Date.now },
})

module.exports = Post = mongoose.model("posts", PostsSchema)
