const express = require("express");
const app = express();

var PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/trying", function (req, res) {
  res.send("Hello trying World");
});

app.listen(PORT);
