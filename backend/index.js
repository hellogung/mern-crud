import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/userRoute.js";

const app = express();

// setup connection mongodb
mongoose.connect("mongodb://localhost:27017/fullstack_db"); // create connection db
const db = mongoose.connection; // connect to db

// handling db connection response
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected"));

// middleware
app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(5000, () => console.log("Server up and run..."));
