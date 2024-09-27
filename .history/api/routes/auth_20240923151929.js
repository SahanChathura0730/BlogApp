const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async(req,res) =>{
   try {

      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt)
      const newUser = new User ({
         username: req.body.username,
         email: req.body.email,
         password: hashedPass,
      });

      const user = await newUser.save();
      res.status(200).json(user);
   }
   catch (err){
      console.error("Error in /register:", err);
      res.status(500).json(err);
   }
});
//LOGIN

router.post("/login", async (req, res) => {
   try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
         return res.status(400).json("Wrong credentials!!"); // Add return here
      }

      const validated = await bcrypt.compare(req.body.password, user.password);
      if (!validated) {
         return res.status(400).json("Wrong credentials!"); // Add return here
      }

      const { password, ...others } = user._doc;
      return res.status(200).json(others); // Add return here
   } catch (err) {
      return res.status(500).json(err); // Add return here
   }
});


module.exports = router