// calling express, mongoose,
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/users")
const pinRoute = require("./routes/pins")
//creating express app
const app = express()

dotenv.config()

app.use(express.json())


mongoose
  .connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}) 
  .then(() => {
  console.log("MONGODB CONNECTED")
  })
  .catch(err => console.log(err))

app.use("/api/pins", pinRoute)
app.use("/api/users", userRoute)

app.listen(8801, () => {
  console.log("BACKEND SERVER IS RUNNING!")
})