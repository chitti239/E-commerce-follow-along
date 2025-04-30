const mongoose = require("mongoose");
const { schema } = require("./CartModel");

const Schema = mongoose.Schema({
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"address",
        required:true
    },
    products:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cart",
        required:true
    }
});

const orderModel = mongoose.model("order",schema);

module.exports = orderModel;