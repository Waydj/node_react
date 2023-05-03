const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hello, world!" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT);
