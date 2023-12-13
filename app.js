const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send('<h1>The "Add Product" page</h1>');
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express.js</h1>");
});

console.log("outside the middleware");

app.listen(3000);
