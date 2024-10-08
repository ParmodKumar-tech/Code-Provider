const {model}=require("mongoose");
const cardSchema = require("../schema/cardSchema");

module.exports=model("card",cardSchema);