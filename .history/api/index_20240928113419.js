const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require( "mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require ("./routes/posts");
const categoryRoute = require ("./routes/categorys");
const multer = require ("multer");
const cors = require("cors");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/Images", express.static(path.join(__dirname,"/Images")))

// Use CORS middleware
app.use(cors({
   origin: 'http://localhost:5174', // Allow requests from this origin (Vite's frontend)
   credentials: true, // If you need to send cookies with requests
 }));
 

 mongoose.connect(process.env.MONGO_URL)
 .then(() => console.log("Connected to MongoDB"))
 .catch((err) => console.log(err));

 

const storage =multer.diskStorage({
   destination: (req, file, cb) =>{
      cb (null, "Images")
   }, 
   filename: (req, file, cb) =>{
      cb (null, req.body.name)
   }
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
   res.status(200).json("File has been uploaded")
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5001", ()=>{
   console.log("Backend is running")
});