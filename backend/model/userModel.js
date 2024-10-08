const { model } = require("mongoose");
const userSchema=require("../schema/userSchema");

module.exports = model("user",userSchema); // collection created--
