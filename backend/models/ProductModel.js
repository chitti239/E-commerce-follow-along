const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");

const schema = mangoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    },
    images:{
        type:[String],
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"user",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const productModel = mongoose.model("Products",schema);

module.exports = productModel;