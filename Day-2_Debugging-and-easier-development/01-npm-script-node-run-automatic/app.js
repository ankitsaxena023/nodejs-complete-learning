const http = require("http");
const routes = require("./routes");

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);

// Note :

//1. start with npm init and follow the commands then you'll get package.json which helps you to manage dependencies and install third party libraries

// 2. then in the scripts section use "start":"node app.js" and in the terminal type npm start and it'll automatically run your application
