import express from "express";

const app = express();
app.use((req, res, next) => {
  console.log("Middleware is called");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello user");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
