import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Register/Register.css';
import axios from 'axios';

function Register(){

    const [username ,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    let handleSubmit= async(e)=>{
        e.preventDefault();
        
        try{
            await axios.post('http://localhost:8000/register',{username,email,password})
            .then((res)=>console.log("Result "+res.data))
            .catch((err)=>console.log(err));
        }
        catch(e){
            console.log(e);
        }
        
    }
    

    return(
        <div className='register'>

            <h1>Register for free!</h1>

            <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="username" name="username" />
            <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} name="email" />
            <input type="password" name="password"  onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
            
            <button >Register</button>        
            </form>
            <p>Already have an acccount <Link to="/login" >Login</Link></p>
        </div>
    )
   
    
    
    
}

export default Register;
