const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create User Schema
const PostsSchema = new Schema({
  title: {
    type: String,
    required: true,
    immutable: true,
  },
  content: { type: String, required: false },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
    immutable: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    default: [],
  },
  dateCreated: { type: Date, default: Date.now, immutable: true },
  comments: [
    {
      content: { type: String },
      likes: { type: Number },
      commentedBy: mongoose.Schema.Types.ObjectId,
      likedby: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
    },
  ],
})

module.exports = Post = mongoose.model("posts", PostsSchema)
