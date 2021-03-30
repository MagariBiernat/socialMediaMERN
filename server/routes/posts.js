require("dotenv").config()

const express = require("express")
const router = express.Router()
const passport = require("passport")
const validatePostsInput = require("../validations/posts")
const validateAuthIdAndToken = require("../validations/validateAuth")
const Posts = require("../models/Posts")
const User = require("../models/User")

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
  Posts.find()
    .populate("postedBy", "firstName lastName")
    .sort({ dateCreated: "desc" })
    .limit(10)
    .exec((err, posts) => {
      if (posts) {
        return res.json(posts)
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
  //data needed :
  // post's id
  // authenticate user, if he is the author of post
})

module.exports = router
