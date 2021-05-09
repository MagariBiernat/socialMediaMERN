require("dotenv").config()

const isEmpty = require("is-empty")
const express = require("express")
const router = express.Router()
const passport = require("passport")
const validatePostsInput = require("../validations/Posts/posts")
const validateAuthIdAndToken = require("../validations/validateAuth")
const Posts = require("../models/Posts")
const User = require("../models/User")
const posts = require("../validations/Posts/posts")

// const authorizeMiddleware = () => {
//   return passport.authenticate("jwt", { session: false })
// }

// CREATE
router.post("/newPost", (req, res) => {
  const { errors, isValid } = validatePostsInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  const { title, content, postedBy } = req.body

  if (
    !validateAuthIdAndToken({
      token: req.get("authorization").split(" ")[1],
      postedBy: postedBy,
    })
  ) {
    return res.status(400).json({ message: "A problem has occurred" })
  }

  //Validate if user's ID is in DB

  User.findOne({ _id: postedBy }).then((User) => {
    if (!User) {
      return res.status(400).json({ message: "User's ID not in DB" })
    } else {
      Posts.findOne({
        title: title,
        content: content,
        postedBy: postedBy,
        createdAt: Date.now,
      }).then((Post) => {
        if (Post) {
          return res.status(400).json({ message: "No duplicate posts" })
        } else {
          const newPost = new Posts({
            title: title,
            content: content,
            postedBy: postedBy,
          })

          newPost
            .save()
            .then(() => res.json({ message: "Success" }))
            .catch((error) => console.log(error))
        }
      })
    }
  })
})

// READ - get all posts
// TODO: modify to get 10 next and next...
router.get("/", (req, res) => {
  let countPosts
  Posts.find({})
    .countDocuments()
    .then((count) => {
      countPosts = count
    })
  Posts.find()
    .populate("postedBy likedBy", "firstName secondName lastName")
    .sort({ dateCreated: "desc" })
    .limit(10)
    .exec((err, posts) => {
      if (posts) {
        return res.json({ postsCount: countPosts, data: posts })
      } else {
        return res.status(400).json({ message: "No posts available" })
      }
    })
})

// router.post("/test", (req, res) => {
//   const auth = req.get("authorization")
//   console.log(auth.split(" ")[1])
//   return res.status(200)
// })

// UPDATE
router.post("/update", (req, res) => {
  // post's id
  // auth and validate user
  // update content only
})

// DELETE
router.post("/delete", (req, res) => {
  const { postId, usersId } = req.body

  if (isEmpty(postId) || isEmpty(usersId)) {
    return res.status(400).json({ message: "No post's ID specified" })
  }

  if (
    !validateAuthIdAndToken({
      token: req.get("authorization").split(" ")[1],
      postedBy: usersId,
    })
  ) {
    return res.status(400).json({ message: "A problem has occurred" })
  }
  // Posts.find({postId}).exec( (err, posts) => {
  //   if(post.postedBy !== req.authorization)
  // })

  Posts.deleteOne({ _id: postId }, (error) => {
    if (error) {
      return res.status(400).json({ message: "Error while deleting a post." })
    } else {
      return res.json({ message: "noice" })
    }
  })

  // authenticate user, if he is the author of post
})

// Like post

router.post("/likePost", async (req, res) => {
  const { postId, likedBy } = req.body

  if (isEmpty(postId) || isEmpty(likedBy)) {
    return res.status(400).json({ message: "No data" })
  }

  if (
    !validateAuthIdAndToken({
      token: req.get("authorization").split(" ")[1],
      postedBy: likedBy,
    })
  ) {
    return res.status(400).json({ message: "A problem has occurred" })
  }

  //validate if it's already liked by this User
  const likePost = async () => {
    return new Promise((resolve, reject) => {
      Posts.findOne({ _id: postId }).exec((err, post) => {
        if (post.likedBy.includes(likedBy)) {
          reject()
        } else {
          resolve()
        }
      })
    })
  }

  likePost()
    .then(async () => {
      const updateLike = Posts.updateOne(
        { _id: postId },
        {
          $push: {
            likedBy: {
              $each: [likedBy],
            },
          },
          $inc: {
            likes: 1,
          },
        },
        {}
      )
      const result = await updateLike
      return result
    })
    .then((result) => {
      if (result) {
        return res.json({ message: "Success liking" })
      }
    })
    .catch(() => {
      return res.status(400).json({ message: "Already liked by this user" })
    })
})

//unlikePost
router.post("/unlikePost", async (req, res) => {
  const { postId, likedBy } = req.body

  if (isEmpty(postId) || isEmpty(likedBy)) {
    return res.status(400).json({ message: "No data" })
  }

  if (
    !validateAuthIdAndToken({
      token: req.get("authorization").split(" ")[1],
      postedBy: likedBy,
    })
  ) {
    return res.status(400).json({ message: "A problem has occurred" })
  }

  const disLikePost = () => {
    return new Promise((resolve, reject) => {
      Posts.findOne({ _id: postId }).exec((err, post) => {
        console.log(post.likedBy.includes(likedBy))
        if (post.likedBy.includes(likedBy)) {
          resolve()
        } else {
          reject()
        }
      })
    })
  }

  disLikePost()
    .then(async () => {
      const result = await Posts.updateOne(
        { _id: postId },
        {
          $inc: {
            likes: -1,
          },
          $pull: {
            likedBy: likedBy,
          },
        }
      )
      return result
    })
    .then((result) => {
      if (result) {
        return res.json({ message: "Success disliking" })
      }
    })
    .catch((error) => {
      return res.status(400).json({ message: "It is not liked by this user" })
    })
})

// comments
// comments
// comments

// add comment

router.post("/comments", async (req, res) => {
  const { commentContent, commentedBy, postId } = req.body

  if (isEmpty(commentContent) || isEmpty(postId) || isEmpty(likedBy)) {
    return res.status(400).json({ message: "No data" })
  }

  if (
    !validateAuthIdAndToken({
      token: req.get("authorization").split(" ")[1],
      postedBy: commentedBy,
    })
  ) {
    return res.status(400).json({ message: "A problem has occurred" })
  }
})

module.exports = router
