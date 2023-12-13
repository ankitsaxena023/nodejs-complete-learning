const express = require("express");
const adminRoutes = require("./routes/admin");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use();

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express.js</h1>");
});

app.listen(3000);
