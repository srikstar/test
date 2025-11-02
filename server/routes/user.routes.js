const express = require("express");
const Users = require("../models/signup.models.js");
const userRouter = express.Router();
const bcrypt = require('bcryptjs')

// Sign Up
userRouter.post("/signup", async (req, res, next) => {
  try {

    // Check if the user exist
    const user = await Users.findOne({ email: req.body.email });
    if (user) {
      return res.send({
        success: false,
        message: "User Already Exists",
      });
    }

    // Hash the Password
    const salt = await bcrypt.genSalt(10)
    const hashPwd = await bcrypt.hashSync(req.body.password, salt)
    req.body.password = hashPwd
    
    const newUser = new Users(req.body);
    await newUser.save();

    res.send({
      success: true,
      message: "User Registered Successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});


// Login

userRouter.post('/signin', async (req,res,next) => {
  try {
    const user = await Users.findOne({email:req.body.email})
    if(!user) {return res.send({
      success:false,
      message:'User dont not exist'
    })
  }

    const validPassword = await bcrypt.compare(req.body.password,user.password)

    if(validPassword){
      res.send({
        success:true,
        message: 'User login successfull'
      })
    }
    else{
      res.send({
        success:false,
        message: 'User login unsuccessfull'
      })
    }

  } catch (error) {
    console.log(error)
  }
})


module.exports = userRouter;
