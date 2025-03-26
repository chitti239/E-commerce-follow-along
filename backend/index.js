
const express = require("express");
const app = express();

app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const jwt = require('jsonwebtoken');
const userModel= require("./models")

const cors = require("cors");
app.use(cors);

const connect = require("./mongoDB");
const userRouter = require("./controllers/userRouter")
const productRouter = require("./controllers/ProductRouter")

 
app.get("/",(req,res)=>{
    try {
        res.status(200).send({mgs:"This is E-commerce code along backend"});
    } catch (error) {
        res.status(500).send({message:"error occured"});
    }
})

app.use("/user",userRouter)

app.use("./ProductRouter");

app.use("product",async(req,res)=>{
    try {
        const auth = req.headers.authorization;
        if(!auth){
            return res.status(401).send({msg:"Please"})
        }
        const decoded = jwt.verify(auth,process.env,JWT_PASSWORD);
        const user = await userModel.findOne({_id:decoded.id});
        if(!user){
            return res.status(401).send({msg:"Please register first....."})
        }
        console.log(decoded);
        next();
    } catch (error) {
        return res.status(500).send({msg:"Something went wrong......"})
    }
})


app.listen(8080,async()=>{
    try {
        await connect();
        console.log("Server connected successfully");
    } catch (error) {
        console.log("Error",error)
    }

})

