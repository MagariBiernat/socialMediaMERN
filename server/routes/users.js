require("dotenv").config()

const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.SECRET_KEY

const validateRegisterInput = require("../validations/register")
const validateLoginInput = require("../validations/login")
const validateEmail = require("../validations/email")

const User = require("../models/User")

// Get user's data, searching by email
router.post("/profile", (req, res) => {
  const { errors, isValid } = validateEmail(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }
  const { email } = req.body
  console.log(req.body, email)
  User.find({ email: email }).then((user) => {
    console.log(user[0])
    if (user[0]) {
      console.log("works", user[0].firstName)
      console.log(typeof user[0].createdAt, user[0].createdAt)
      const userData = {
        firstName: user[0].firstName,
        secondName: user[0].secondName,
        lastName: user[0].lastName,
        nickname: user[0].nickname,
        gender: user[0].gender,
        email: user[0].email,
        createdAt: user[0].createdAt,
      }
      return res.json(userData)
    } else {
      return res.status(400).json({ message: "No email" })
    }
  })
})

// LOGIN ROUTE
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  const { email, password } = req.body

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res
        .status(404)
        .json({ wrongCredentials: "Email or password incorrect - Email" })
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          email: user.email,
        }

        jwt.sign(
          payload,
          SECRET_KEY,
          {
            expiresIn: 86400, // 1 day in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            })
          }
        )
      } else {
        return res
          .status(400)
          .json({ wrongCredentials: "Email or password incorrect - Password" })
      }
    })
  })
})

// REGISTER
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body)
  console.log(errors, isValid)
  if (!isValid) {
    return res.status(400).json(errors)
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" })
    } else {
      const newUser = new User({
        firstName: req?.body?.firstName,
        secondName: req?.body?.secondName,
        lastName: req?.body?.lastName,
        nickname: req?.body?.nickname,
        gender: req?.body?.gender,
        email: req?.body?.email,
        password: req?.body?.password,
      })

      // Hashing password before storing in db

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          newUser
            .save()
            .then((user) => res.json(user))
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        })
      })
    }
  })
})

module.exports = router
