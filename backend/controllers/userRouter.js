const express = require("express");
const userRouter = express.Router();
const uploadUserImage = require("../middlewares/multer");
const bcrypt = require("bcryptjs");
const {userModel} = require("../models/userModel");


userRouter.post("/signup",uploadUserImage.single("image"),async(req,res)=>{
    try {
       const {name,email,password} = req.body;
       if(name!="" || email!="" || password!=""){
        return res.status(400).send({msg:"All fields are required"});
       } 

       const user = await userModel.findOne({email:email});
       if(user){
        return res.status(200).send({msg:"User Already Exists"})
       }
       const salt = bcrypt.genSaltSync(10);
       const hash = bcrypt.hashSync(password, salt);


       const newUser = await userModel.insertOne({name,email,password:hash});
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
        
        const user = userModel.findOne({email:email});
        const matchedPass = bcrypt.compareSync(password, hash);

        if(user && matchedPass){
        return res.status(200).send({msg:"User logedin successfully!"})
        }
        return res.status(401).send({msg:"Entered details are wrong"})
    } catch (error) {
        return res.status(500).send({msg:"Something went wrong!"});
    }
})

module.exports = userRouter;