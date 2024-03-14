const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"))


app.get("/", (req, res) => {
  console.log("this will print in terminal not on server");
  res.send("<h1>Hello World!</h1>");
});

app.post("/", (req, res) => {
  console.log("this is a post request");
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
