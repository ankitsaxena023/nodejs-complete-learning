const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  // res.send("<h1>Hello from Express.js</h1>"); // Now we can send our file instead of raw data
  res.sendFile('../views/shop.html');
});

module.exports = router;
