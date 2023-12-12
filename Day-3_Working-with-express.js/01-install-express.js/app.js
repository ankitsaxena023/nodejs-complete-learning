const http = require("http");
const express = require("express");

// make an express application here
const app = express();

const server = http.createServer(app);

server.listen(3000);

//Note : express js is all about middleware where middleware means
