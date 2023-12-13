const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("1. This always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("2. In another middleware");
  res.send('<h1>The "Add Product" page</h1>');
});

app.use("/", (req, res, next) => {
  console.log("3. again another middleware");
  res.send("<h1>Hello from Express.js</h1>");
});

app.listen(3000);
