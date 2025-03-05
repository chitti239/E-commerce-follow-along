<<<<<<< HEAD
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
=======
const express = require("express")

const app = express();
 
app.get("/",(request,response)=>{
    try {
        response.status(200).send({mgs:"This is e-commerce code along backend",data:[
            {title:"test"},
            {title:"test2"}
        ]})
    } catch (error) {
        response.status(500).send({message:"error occured"});
    }
})
app.listen(8080,()=>{
    try {
        console.log("connected to server successfully")
    } catch (error) {
        console.log("Error")
>>>>>>> 0e1b7f5027cc4430ab1e868b5ecfd25c70cfa334
    }
})