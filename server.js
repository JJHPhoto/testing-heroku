const express = require("express");
const app = express();

var PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/test", function (req, res) {
  res.send("Hello testing World");
});

app.listen(PORT);
