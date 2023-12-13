const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express.js</h1>");
});

console.log("outside the middleware");

app.listen(3000);
