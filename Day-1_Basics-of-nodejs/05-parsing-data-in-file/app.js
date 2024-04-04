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
    const body = [];
    req.on("data", (chunk) => {
      console.log("chunk", chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      console.log("body", body);
      const parsedBody = Buffer.concat(body).toString();
      console.log("parsedbody", parsedBody);

      const message = parsedBody.split("=")[1];
      console.log("message", message);

      // Note: 1. line number 31 executes after line number 34-36 code, means it'll executes after response sent because it's an synchronous method of node js and due to which it'll not wait in event loop it'll executes immediately later we solve this problem with writeFile method

      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();

    // Note: 2. above event listener code is problematic because if we do something in the event listener which influences the response this is the wrong way
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
