import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


function Login() {

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

   
    



    let handleSubmit=async(e)=>{
        e.preventDefault();

        await axios.post("http://localhost:8000/login",{email,password})
        .then((res)=>console.log(res.data))
        .catch((e)=>console.log(e))
        


    }
    return ( 
        <div className='register'>

        <h2>Login | welcome back!</h2>
        <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" name="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button>Login</button>        
        </form>
        <p>New user! <Link to="/register" >Register</Link></p>
    </div>  
     );
}

export default Login;