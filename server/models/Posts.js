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
      _id: mongoose.Types.ObjectId,
      content: { type: String },
      likes: { type: Number, default: 0 },
      commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
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
    },
  ],
})

module.exports = Post = mongoose.model("posts", PostsSchema)
