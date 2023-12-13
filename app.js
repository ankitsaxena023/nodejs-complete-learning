const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // this body-parser parse the data like form data for us which we've been parsing our own in the previous section but for other kind of data parsing like file data we'll use different parser, and this makes express so extensible

app.use("/add-product", (req, res, next) => {
  // console.log("2. In another middleware");
  // res.send('<h1>The "Add Product" page</h1>');
  // let's make above code a form
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

// app.use("/product", (req, res, next) => {

//Note: here app also give us app.get and app.post filter so that we can filter our request according to our need, so below function only will fire for POST request because /product is an POST method as mentioned /add-product

app.post("/product", (req, res, next) => {
  console.log(req.body);
  // console.log(req.body.title);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  // console.log("3. again another middleware");
  res.send("<h1>Hello from Express.js</h1>");
});

app.listen(3000);
