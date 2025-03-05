const express = require("express");
const userRouter = express.Router();
const uploadUserImage = require("../middlewares/multer")
const {userModel} = require("../models/userModel")


userRouter.post("/signup",uploadUserImage.single("image"),async(req,res)=>{
    try {
       const {name,email,password} = req.body;
       if(name!="" || email!="" || password!=""){
        return res.status(400).send({msg:"All fields are required"});
       } 

       const user = userModel.findOne({email:email});
       if(user){
        return res.status(200).send({msg:"User Already Exists"})
       }

       const newUser = await userModel.insertOne({name,email,password});
       return res.sendStatus(200).send({msg:"User registered successfully!"});

    } catch (error) {
        return res.status(500).send({msg:"Something went wrong!"});
    }
})

userModel.post("/login",(req,res)=>{
    try {
        const {email,password} = req.body;
        if( email!="" || password!=""){
            return res.status(400).send({msg:"All fields are required"});
           } 
        const user = userModel.findOne({email:email,password:password});
        if(user){
        return res.status(200).send({msg:"User Already Exists"})
        }
        return res.status(200).send({msg:"User logedin successfully!"})
    } catch (error) {
        return res.status(500).send({msg:"Something went wrong!"});
    }
})

module.exports = userRouter;