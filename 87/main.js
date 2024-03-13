
const fs = require("fs");
// import fs from 'fs/promises';
console.log(fs);

console.log("starting");
//synchronous
// fs.writeFileSync("abhi.text", "abhii is a good boy");

//asyinchronous
fs.writeFile("abhi2.txt", "abhii is a good boy", () => {
  console.log("done");
  fs.readFile("abhi2.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

fs.appendFile("abhi2.txt", "this is being append in abhi2.txt hello bhai", (e, d) => {});

console.log("ending");
