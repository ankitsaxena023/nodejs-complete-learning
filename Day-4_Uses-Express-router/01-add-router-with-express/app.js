const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(3000);

// express.Router() method provide router which we use for handle our get post and other works in other words with the help of express.Router() we manage our routes
