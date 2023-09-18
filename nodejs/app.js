const http = require("http");
const fs = require("fs"); // FILE SYSTEM

const callback = (req, res) => {
  const { method, url } = req;

  if (url == "/api") {
    res.end();
  }

  if (method === "GET") {
    res.write("Hello world");
    res.end();
  }
};

const server = http.createServer(callback);

server.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else console.log("Server Started");
});
