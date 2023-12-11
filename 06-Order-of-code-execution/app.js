const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="name"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    // Note : for parsing data we need stream of chunks and a buffer
    // 1. we store all the chunks in body array
    const body = [];
    req.on("data", (chunk) => {
      console.log("chunk", chunk);
      body.push(chunk);
    });
    // 2. now after all the chunks collected in the body we make a buffer and store our body array in it
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message.split("+").join(" "));
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
