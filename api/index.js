// calling express, mongoose,
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

//creating express app
const app = express()

dotenv.config()

app.use(express.json())


mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => {
  console.log("MONGODB CONNECTED")
  })
  .catch(err => console.log(err))

  

app.listen(8801, () => {
  console.log("BACKEND SERVER IS RUNNING!")
})