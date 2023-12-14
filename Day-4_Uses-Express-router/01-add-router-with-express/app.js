const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>"); //so here we can send code for handle error and we can use chain of methods here like we did status but always remember send should be the last one
});

app.listen(3000);

//express.Router() method provide router which we use for handle our get post and other works in other words with the help of express.Router() we manage our routes
