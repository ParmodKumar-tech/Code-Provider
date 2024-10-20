const userModel = require("./model/userModel");

let isLogined=async(req,res)=>{
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
}

module.exports=isLogined