
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello DevOps! My First CI/CD Project</h1>");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
