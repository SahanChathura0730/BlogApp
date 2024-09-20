const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post")
const bcrypt = require("bcrypt");

//UPDATE
router.put("./:id", async(req,res) => {
   if ( req.body.userIDd === req.params.id) {
      if(req.body.password){
         const salt = await bcrypt.genSalt(10);
         req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try{
         const updatedUser = await User.findByIdAndUpdate(
            req.params.id, {
               $set: req.body,
            },
            {new:true}
         );
         res.status(200).json("updated User");
      }catch(err){
         res.status(500).json(err);
      }
   }else{
      res.status(401).json("You can update only your account!");
   }
});

//DELETE
router.delete("./:id", async(req,res) => {
   if ( req.body.userIDd === req.params.id) {
      try {
         const user = await User.findById (req.params.id);
         try{
            await Post.deleteMany({username: user.username});
            await User.findByIdAndDelete(req.params.id);
            res.status (200) . json ("User has been deleted...");
         }catch(err){
            res.status(500).json(err);
         }
      }catch{
         res.status(404).json("User not found!");
      }
   }else{
      res.status(401).json("You can delete only your account!");
   }
});

module.exports = router;