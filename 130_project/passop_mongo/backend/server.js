import express from "express";
import { config } from "dotenv";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import  cors  from "cors";

config();

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "myProject";
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors())

client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");

    // Get all passwords
    app.get("/", async (req, res) => {
      try {
        const db = client.db(dbName);
        const collection = db.collection("passwords");
        const findResult = await collection.find({}).toArray();
        res.json(findResult);
      } catch (error) {
        console.error("Error retrieving documents:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Save a password
    app.post("/", async (req, res) => {
      try {
        const password = req.body;
        const db = client.db(dbName);
        const collection = db.collection("passwords");
        const findResult = await collection.insertOne(password);
        res.json({ success: true, result: findResult });
      } catch (error) {
        console.error("Error saving document:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Delete a password by id
    app.delete("/", async (req, res) => {
      const password = req.body;
      const db = client.db(dbName);
      const collection = db.collection("passwords");
      const findResult = await collection.deleteOne(password);
      res.json({ success: true, result: findResult });
    });
    // Start the server
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
