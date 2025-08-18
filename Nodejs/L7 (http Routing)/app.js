const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log(req.url);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello i am backend");
  } else if (req.url === "/api/user") {
    const user = {
      name: "Aj",
      age: 23,
    };
    const data = JSON.stringify(user);
    console.log(user);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(8000, () => {
  console.log("server listening on port 8000");
});
