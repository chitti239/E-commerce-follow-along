const express = require("express");

const productRouter = express.Router();

const productModel = require("../models/ProductModel");
const productImages = require("../middlewares/multer")

productRouter.post("/addproducts",(req,res,next)=>{
    productImages.array("image",6)(req,res,(err)=>{
        if(err){
            return res.status(500).send({msg:"Something went wrong while uploading image"});
        }
    })
},async(req,res)=>{
    try {
        const {title,description,price} = req.body;
        if(!title || !description || !price){
            res.status(404).send({msg:"Please add all fields"})
        }

        const images = res.files;
        const imageLinkArray = [];
        images.forEach((ele) => {
            console.log(ele)
        });

        return res.status(200).send({msg:"Product Added Successfully.."})

    } catch (error) {
        return res.status(500).send({msg:"Something went wrong!"});
    }
})

module.exports = productRouter;

