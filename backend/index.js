
const express = require("express");
const app = express();

app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const jwt = require('jsonwebtoken');
const userModel= require("./models/userModel");
const cartRouter = require("./controllers/CartProducts")

const cors = require("cors");
app.use(cors);

const connect = require("./mongoDB");
const userRouter = require("./controllers/userRouter");
const productRouter = require("./controllers/ProductRouter");
const allProductRouter = require("./controllers/allProducts");


 
app.get("/",(req,res)=>{
    try {
        res.send({message:"This is E-commerce Follow Along Backend"});
    } catch (error) {
        res.status(500).send({error});
    }
})

app.use("/user",userRouter);

app.use("/product",async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        console.log(token)
        if (!token) {
            return res.status(401).json({ message: "Please login" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
        const user = await userModel.findById(decoded.id);
        
        if (!user && user.id) {
            return res.status(404).json({ message: "Please signup" });
        }
        console.log(user.id)
        req.userId = user.id; 
        next();
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Invalid Token", error });
    }
},productRouter);

app.use('/cart',async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        console.log(token)
        if (!token) {
            return res.status(401).json({ message: "Please login" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
        const user = await userModel.findById(decoded.id);
        
        if (!user && user.id) {
            return res.status(404).json({ message: "Please signup" });
        }
        console.log(user.id)
        req.userId = user.id; 
        
        next();
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Invalid Token", error });
    }
},cartRouter);


app.use('/allproducts',allProductRouter);
app.use("/upload",express.static(path.join(__dirname,"uploads")));

app.listen(8080,async()=>{
    try {
        await connect()
        console.log("Server connected successfully");
    } catch (error) {
        console.log("Error",error)
    }

})

