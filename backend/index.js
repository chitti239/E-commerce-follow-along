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
    }
})