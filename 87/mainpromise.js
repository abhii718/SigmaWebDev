import fs from "fs/promises";

// cause we are inside module file So we don't have to write async for using await
let a = await fs.readFile("abhi2.txt");

let b = await fs.writeFile(
  "abhi3.txt",
  "\nThis is writting \nfile by mainpromise.js\n\t a \t"
);
let c = await fs.appendFile(
  "abhi3.txt",
  "\nThis is being append by mainpromise.js"
);

console.log(a.toString());
