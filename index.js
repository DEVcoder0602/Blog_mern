const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://priyansh274:priyansh274@cluster0.qr62s2z.mongodb.net/blog?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.listen("5000", () => {
    console.log("Backend is running.");
  });