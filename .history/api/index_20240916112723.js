const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require( "mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require ("./routes/posts");
const categoryRoute = require ("./routes/categorys");
const multer = require ("multer")

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
}).then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage =multer.diskStorage({
   destination: (req, file, cb) =>{
      cb (null, "images")
   }, 
   filename: (req, file, cb) =>{
      cb (null, "hello.jpg")
   }
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
   res.status(200).json("File has been uploaded")
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categorys", categoryRoute);

app.listen("5001", ()=>{
   console.log("Backend is running")
});