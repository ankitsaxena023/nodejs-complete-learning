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

router.get("/admin/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.post("/add-product", (req, res, next) => {
  console.log("reqBody", req.body);
  res.redirect("/");
});

module.exports = router;
