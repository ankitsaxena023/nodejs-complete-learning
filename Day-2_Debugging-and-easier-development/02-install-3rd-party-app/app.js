const http = require("http");
const routes = require("./routes");

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);

// Note :

// install nodemon with typing "npm install nodemon --save-dev" in the terminal here --save-dev defines that we need this library only for development purposes if we only use --save then it'll be defined for the production environment

// for using nodemon you can run command in terminal "nodemon app.js" or you can edit "start":"nodemon app.js" in the package.json file and use npm start in terminal
