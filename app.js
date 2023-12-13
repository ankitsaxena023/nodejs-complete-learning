const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

app.use("/", (req, res, next) => {
  console.log("1. This always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("2. In another middleware");
  // res.send('<h1>The "Add Product" page</h1>');
  // let's make above code a form
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("3. again another middleware");
  res.send("<h1>Hello from Express.js</h1>");
});

app.listen(3000);
