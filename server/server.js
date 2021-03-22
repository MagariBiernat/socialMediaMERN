require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")
const cors = require("cors")
const users = require("./routes/users")

const app = express()

// bodyParser middleware in express
// express >= 4.16.x has bodyparser built in
// express.urlencoded(), express.json()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({ credentials: true, origin: true }))
app.options("*", cors())

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error))

// Passport middleware
app.use(passport.initialize())
// Passport config
require("./config/passport")(passport)

// Routes

app.use("/users", users)

const port = process.env.PORT || 3000
app.listen(port, () => console.log("Server Started"))
