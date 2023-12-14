const express = require("express");

const router = express.Router();

// 1. Normal path
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log("reqBody", req.body);
  res.redirect("/");
});

// 2. Admin path

// Note : Some points to remember
// 1) we can use same path for different routes (like here for get and post)
// 2) we also need to change our form action "add-product"

router.get("/admin/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.post("/admin/add-product", (req, res, next) => {
  console.log("reqBody", req.body);
  res.redirect("/");
});

module.exports = router;
