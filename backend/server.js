const express=require("express");
const mongoose=require("mongoose");
const userModel=require("./model/userModel");
const cardModel = require("./model/cardModel");
const app=express();
const cors = require("cors");
const bcrypt=require("bcrypt");

// Add middleware to parse incoming JSON requests
app.use(express.json());

app.use(cors()); // Enable CORS for all routes

mongoose.connect("mongodb://127.0.0.1:27017/react-dragcoder") // database created--
.then((res)=>console.log("connect with DB"));

app.post("/register",async(req,res)=>{
    const {username,email,password}=req.body;
    let isUserExist= await userModel.findOne({email});

    if(isUserExist){
        console.log("already exists");
        
    }else{

    // hashPass= original Pass + salt(random string);
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async(err,hashPass)=>{
        let newUser=await userModel.create({
            username:username,
            email:email,
            password:hashPass
        })
        
    })
 })}
   
    
    
})

app.post("/login",async(req,res)=>{
   const {email,password}=req.body;
   let isRegisteredUser= await userModel.findOne({email});

   if(isRegisteredUser){
    
    console.log("you already exists")
   
    }

   else{
   
    console.log("not exist");
   
    }

  
})

app.get("/all-source-code",async(req,res)=>{
    let allData= await cardModel.find();
    res.json(allData);
})

app.post("/source-code",async(req,res)=>{
    let addSourceCode=await cardModel(req.body);
    addSourceCode.save();
    console.log(addSourceCode)
})


app.get("/card/:id",async(req,res)=>{
    const {id}=req.params;
    let specificCardInfo= await cardModel.findOne({id});
    console.log(specificCardInfo);

})


app.listen("8000",(req,res)=>{
    console.log("server is listing on port 8000");
})