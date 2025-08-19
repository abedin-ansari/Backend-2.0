const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  const filePath = __dirname + "/index.html";

  const htmlContent = fs.readFileSync(filePath);

  res.end(htmlContent);
});

server.listen(8000, () => {
  console.log("Server is Running");
});
