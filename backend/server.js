const express=require("express");
const mongoose=require("mongoose");
const userModel=require("./model/userModel");
const cardModel = require("./model/cardModel");
const app=express();
const cors = require("cors");
const bcrypt=require("bcrypt");

const cookieParser=require("cookie-parser");

// Add middleware to parse incoming JSON requests
app.use(express.json());
app.use(cookieParser());
app.use(cors()); // Enable CORS for all routes

mongoose.connect("mongodb://127.0.0.1:27017/react-dragcoder") // database created--
.then((res)=>console.log("connect with DB"));

app.post("/register",async(req,res)=>{
    const {username,email,password}=req.body;
    let isUserExist= await userModel.findOne({email});

    if(isUserExist){
       res.send("User already exists, Login now!");
        
    }
    
    else
    {

    // hashPass= original Pass + salt(random string);
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async(err,hashPass)=>{
        let newUser=await userModel.create({
            username:username,
            email:email,
            password:hashPass
        })
        res.send({message:"Registered Successfully!",newUser})
    })
    
    

   }
  

)}
   
})

app.post("/login",async(req,res)=>{
   const {email,password}=req.body;
   let isRegisteredUser= await userModel.findOne({email});

    if(isRegisteredUser){
        bcrypt.compare(password,`${isRegisteredUser.password}`,(err,result)=>{
            if(result){
                res.send({validUser:isRegisteredUser});
            }
            else{
                res.send("Password does not match!")
            }
        })

    }else{
        res.send("User does not exists, Register now!");
    }

    

   


  
})

app.get("/all-source-code",async(req,res)=>{
    let allData= await cardModel.find();
    res.json(allData);
})

app.post("/add-source-code",async(req,res)=>{
    let addSourceCode=await cardModel(req.body);
    addSourceCode.save();
    res.send("Project added !");
})


app.get("/projectinfo/:id",async(req,res)=>{
    const {id}=req.params;
    let findProjectInfo=await cardModel.findById(id);
    res.send(findProjectInfo);
    

})

app.post("/updateprojectinfo/:id",async(req,res)=>{
    const {id}=req.params;
    let updateProjectInfo=await cardModel.findByIdAndUpdate({_id:id},{...req.body},{new:true});
    res.send("update successfully!");
})


app.get("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    let deleteProject=await cardModel.findOneAndDelete({_id:id});
    res.send("delete successfully");

})

app.listen("8000",(req,res)=>{
    console.log("server is listing on port 8000");
})