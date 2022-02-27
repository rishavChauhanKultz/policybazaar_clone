const express=require("express");

const router=express.Router();

const User=require("../models/userModel")


router.post("/register", async(req,res)=> {

    try {
        // first check if the number provided is already given to another user
        let user = await User.findOne({ value: req.body.value }).lean().exec();
    
        // if yes then throw an error 400 Bad Request
        if (user)
          return res
            .status(400)
            .send({ message: "User with that email already exists" });
    
        // if not then we will create the user
        // we will hash the password for the user
        user = await User.create(req.body);
        return res.status(201).send({ user });
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }

})



router.post("/login",async(req,res) => {
  try {
    // first we will find the user with the number
    let user = await User.findOne({ value: req.body.value });
console.log(req.body.value)
    // if user is not found then throw an error 400 Bad Request
    if (!user)
      return res
        .status(400)
        .send({ message: "Either Email or Password is incorrect" });

         if(user.value==req.body.value){
          return res.status(201).send({ user});
         }else{
        
          return res
            .status(400)
            .send({ message: "Number  is not signed up" });
         }
    } catch (err) {
    return res.status(500).send({ message: err.message });
  }
})


module.exports=router