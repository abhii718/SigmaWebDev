import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn =  mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected!"));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({
    title: "Hey first todo",
    desc: "descripton the todo",
    isDone: false,
  });
  todo.save()
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});