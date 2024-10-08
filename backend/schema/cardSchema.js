const mongoose=require("mongoose");

const cardSchema=mongoose.Schema({
    title:String,
    name:String,
    languageAndTool:String,
    content:String,
    price:Number
})

module.exports=cardSchema;