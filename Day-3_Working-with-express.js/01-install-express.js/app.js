const http = require("http");
const express = require("express");

// make an express application here
const app = express();

const server = http.createServer(app);

server.listen(3000);

//Note : express js is all about middleware where middleware means incoming requests funneled(move, pass) through a bunch of functions so basically you can have multiple functions of request handlers until you send a response

// This simply means express js provide you functionality to plugged in with other third party libraries which can connect with functions to your application and provide many functionalities.
