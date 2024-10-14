import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';


function Login() {
    
    const [details,setDetails]=useState({
        email:"",
        password:""
    });
    
    const[userExist,setUserExist]=useState();
    const navigate=useNavigate();

    let handleSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/login",details)
        .then((res)=>{
           
            if(res.data.validUser){
                console.log(res.data.validUser);
                localStorage.setItem("currUser",JSON.stringify(res.data.validUser.username))
                navigate("/");
                window.location.reload(); // it make it refresh entire page | is there another way ??
            }
        

            else{
               setUserExist(res.data);
            }
            
        
        })
        
    }

    let handleOnChange=(e)=>{
        console.log(e)
        const {name,value}=e.target;
        setDetails((prev)=>{
            return {...prev,[name]:value}
        })
    }
   
    return ( 
        <div className='register'>

        <h2>Login now!</h2>

        <form onSubmit={handleSubmit}>
        {userExist}
        <input type="email" placeholder="email" name="email" onChange={handleOnChange}/>
        <input type="password" name="password" placeholder="password" onChange={handleOnChange}/>
        <button>Login</button>        
        </form>

        <p>New user! <Link to="/register" >Register</Link></p>
    </div>  
     );
}

export default Login;