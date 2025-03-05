const mongoose = require("mongoose");

async function connect(){
    try{
        await mongoose.connect("mongodb+srv://sharinisamsani422:follow-along-section@cluster0.aszh6.mongodb.net/")

    }catch(error){
        console.log("Mongo bd error",error);
    }
    
}

module.exports = connect;