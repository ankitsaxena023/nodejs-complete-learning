const http = require("http");
const express = require("express");

// Q. what is Express.js ?
// Ans. Express.js is a framework which handles all the complex server logic so that we can focus on our business logic.

// make an express application here

//Note : express js is all about middleware where middleware means incoming requests funneled(move, pass) through a bunch of functions so basically you can have multiple functions of request handlers until you send a response

// This simply means express js provide you functionality to plugged in with other third party libraries which can connect with functions to your application and provide many functionalities.

const app = express();

// so for plugged in other libraries to application with we use "app.use()" but after creating app object but before pass it to create server, use allow us to add new middleware function
// and this use accepts array of request handlers, and to use this we simply pass a function and this function executes or every incoming request and it has three arguments as you know req, res and also next.
// this next is a function which allows req to travel on to the next middleware

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // this next function allows req to travel on to the next middleware from top to bottom
});

app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express.js</h1>"); // thanks to express.js now we don't need to type that whole bunch of html code for response as we did previously
});

// Note: And as we're using Express.js we also can remove below code for listening from server and can use express app
const server = http.createServer(app);

server.listen(3000);
