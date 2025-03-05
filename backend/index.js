const express = require("express");

const app = express();

const connect = require("./mongoDB")


 
app.get("/",(req,res)=>{
    try {
        res.status(200).send({mgs:"This is e-commerce code along backend"});
    } catch (error) {
        res.status(500).send({message:"error occured"});
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