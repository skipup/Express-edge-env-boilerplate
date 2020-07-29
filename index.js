import express from "express";
import Router from "./router";
import { config, engine } from "express-edge";
import mongoose, { mongo } from "mongoose";
const app = express();

//## setup dotenv
import dotenv from "dotenv";
dotenv.config();

//## Setting up mongodb
mongoose.connect(
  process.env.mongo_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (e, client) => {
    if (e) return e;
    console.log("Mongo Connection Success");
  }
);

//## Static File
app.use(express.static(__dirname + "/public"));

//##    Setup edge template engine
app.use(engine);
app.set("views", __dirname + "/views");

//##    routing
app.use(Router);

//##  setting Server
const port = process.env.port;
app.listen(port, () => {
  console.log("server running on port" + port);
});
