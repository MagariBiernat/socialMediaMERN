require("dotenv").config()

const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.SECRET_KEY

router.post("/verify", (req, res) => {
  const token = req.body
  console.log(object)
})
