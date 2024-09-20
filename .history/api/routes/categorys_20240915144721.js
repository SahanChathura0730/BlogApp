const router = require("express").Router();
const Category = require("../models/Category");
const User = require("../models/Category");

//CREATE CATEGEORY
router.post("/", async(req,res) => {
   const newCat = new Category(req.body)
      try{
         const savedCat = await newCat.save();
         res.status(200).json(savedCat); 
      }catch(err){
         res.status(500).json(err);
      }
   }
);

module.exports = router;