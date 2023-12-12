const http = require("http");
const express = require("express");

// make an express application here
const app = express();

const server = http.createServer(app);

server.listen(3000);
