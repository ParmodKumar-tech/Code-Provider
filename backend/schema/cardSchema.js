const mongoose=require("mongoose");

const cardSchema=mongoose.Schema({
    title:String,
    name:String,
    languageAndTool:String,
    content:String,
    price:Number,
    image:{
        type:String,
        required:true
    }
})

module.exports=cardSchema;