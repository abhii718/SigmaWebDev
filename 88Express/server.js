const express = require("express");
const app = express();
const port = 3000;




app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello about!");
});
app.get("/contact", (req, res) => {
  res.send("Hello contact ME!");
});
app.get("/blog", (req, res) => {
  res.send("Hello blog!");
});
app.get("/blog/:slug", (req, res) => {
  res.send(`hello ${req.params.slug}`);
});
// app.get("/blog/intro-to-ramesh", (req, res) => {
//   res.send("Hello intro-to-ramesh!");
// });
// app.get("/blog/intro-to-remesh", (req, res) => {
//   res.send("Hello intro-to-ramesh!");
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
