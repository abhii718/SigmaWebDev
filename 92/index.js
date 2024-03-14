const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let siteName = "Adidas";
  let searchText = "Search Now";
  res.sendFile("templates/index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
