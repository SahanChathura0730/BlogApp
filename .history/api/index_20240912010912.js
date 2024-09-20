const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,  // Ensures the URL parser is properly used
  useUnifiedTopology: true,  // Handles the MongoDB connection in a better way
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.listen(5001, () => {
  console.log("Backend is running");
});
