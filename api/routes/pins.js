const router = require("express").Router()
const Pin = require("..models/Pin")


//create a pin 

router.post("/", (req, res) => {
  const newPin = new Pin(req,body)
})


// get all pins