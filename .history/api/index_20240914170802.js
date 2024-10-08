const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require( "mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const postRoute = require ("./routes/post")

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
}).then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

app.listen("5001", ()=>{
   console.log("Backend is running")
});