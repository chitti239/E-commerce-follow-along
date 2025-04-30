const express = require("express");
const orderModel = require("../models/orderShema");

const addressRouter = express.Router()

addressRouter.post("/",async(req,res)=>{
    try {
        const{addressId,productIDS} = req.body;
        if(!addressId || productIDS.length<1){
            return res.status(400).send({msg:""})
        }
        
        const postOrder = await orderModel({addressId,products:productIDS}).save();
    } catch (error) {
        return res.status(500).send({msg:"Something went wrong"})
    }
})



module.exports = addressRouter;