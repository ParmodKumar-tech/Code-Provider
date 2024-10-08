const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({ // user-details
    username:String,
    email:String,
    password:String,
})

module.exports=userSchema;