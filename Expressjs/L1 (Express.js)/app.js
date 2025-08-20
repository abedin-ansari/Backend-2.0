const express = require("express");
const { log } = require("node:console");

// First step to create a web server

const app = express();

app.get("/home", (req, res) => {
  res.send("<h1>Hello User this is Node js</h1>");
});

app.get("/api/user/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/api/user/:productId", (req, res) => {
  const id = req.params.productId;
  console.log(id);

  const product = {
    id: 1,
    name: "Redmi",
  };

  res.status(200).json({
    success: true,
    product,
  });
});

app.listen(5000, () => {
  console.log("Server is Running on port 5000");
});
