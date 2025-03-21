
const express = require("express");
const app = express();

app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

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


app.listen(8080,async()=>{
    try {
        await connect();
        console.log("Server connected successfully");
    } catch (error) {
        console.log("Error",error)
    }

})

