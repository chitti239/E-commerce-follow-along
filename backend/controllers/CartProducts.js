const express = require("express");
const productModel = require("../models/productModel");
const cartModel = require("../models/CartModel");

const cartRouter = express.Router();

cartRouter.get("/cartproduct/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).send({msg:"Please enter id"});
        }

        const product = await productModel.findOne({_id:id});
        if(!product){
            res.status(404).send({msg:"Product not found"})
        }
        const{title,description,price,images} = product;
        const newCartProduct = await cartModel.insertOne({title,description,price,images,uderId:req.userId});
        res.status(200).send({msg:"Product added successfully!"});
    } catch (error) {
        return res.status(500).send({msg:"Interal server error.."});
    }
});
cartRouter.put("/:cartproductid",async(req,res)=>{
    try {
        const {cartproductid} = req.params;
        if(!cartproductid){
            return res.status(400).send({msg:"Please add cart product id"});
        }
        const{numberOfCartItems} = req.query;
        if(numberOfCartItems==0){
            const cartItemToBeDeleted = await cartModel.findByIdAndDelete({_id:cartproductid});
            if(!cartItemToBeDeleted){
                return res.status(400).send({msg:"Product not found"});
            }
            return res.status(200).send({msg:"cart item deleted successfully!"});
        }
        if(numberOfCartItems<1){
            return res.status(400).send({msg:"cart items should no be less than one"});
        }
        const item = await cartModel.findByIdAndUpdate({_id:cartproductid},{quantity:numberOfCartItems});
        if(!item){
            return res.status(404).send({msg:"item not found of respective id"});
        }
        return res.status(200).send({msg:"item count updared successfully"})
    } catch (error) {
        return res.status(500).send({msg:"Interal server error.."});
    }
});

cartRouter.get("/",async(req,res)=>{
    try {
        const userId = req.userId;
        const cartData = await cartModel.find({_id:userId});
        return res.status(200).send({msg:"cart items",cartproducts:cartData.length>0?cartData:"no items found in cart"});
    } catch (error) {
        return res.status(500).send({msg:"Interal server error.."});
    }
})



module.exports = cartRouter;