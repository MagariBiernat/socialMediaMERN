require("dotenv").config()

const express = require("express")
const router = express.Router()

const Post = require("../models/Posts")
// CREATE
router.post("/", (req, res) => {})
// READ
router.get("/", (req, res) => {})

// UPDATE
router.post("/update", (req, res) => {})

// DELETE
router.post("/delete", (req, res) => {})

module.exports = router
