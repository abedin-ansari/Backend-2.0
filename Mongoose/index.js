import express from "express";
import { updateMany } from "./models/Movies.js";
import dotenv from "dotenv";
import { config } from "process";
import connectDb from "./db/connectDb.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;

connectDb(DATABASE_URL);

// allDoc();
// updateById("68a60c749ddae5550cfc66d4");
updateMany();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
