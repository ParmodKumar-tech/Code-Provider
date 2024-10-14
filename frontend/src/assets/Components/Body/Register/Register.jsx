import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../Register/Register.css';
import axios from 'axios';

function Register(){

    const [details ,setDetails]=useState({
        email:"",
        password:""
    });

    const [isRegisterUser,setIsRegisterUser]=useState();
    const navigate=useNavigate();

    let handleSubmit= async(e)=>{
        e.preventDefault();
        

        try{
            await axios.post('http://localhost:8000/register',details)
            .then((res)=>{
                if(res.data.newUser){ 
                    navigate("/login");
                }
                else{
                    console.log(res);
                    setIsRegisterUser(res.data);
                }
             
            
        })

        }
        catch(e){
            console.log(e);
        }
        
    }

    let handleOnChange=(e)=>{
        const {name,value}=e.target;
        setDetails((prev)=>{
            return {...prev,[name]:value};
        })
    }
    
    return(
        <div className='register'>

            <h1>Register for free!</h1>
            <form onSubmit={handleSubmit}>
            {isRegisterUser}

            <input type="text" onChange={handleOnChange} placeholder="username" name="username" />
            <input type="email" placeholder="email" onChange={handleOnChange} name="email" />
            <input type="password" name="password"  onChange={handleOnChange} placeholder="password" />
            
            <button >Register</button> 

            </form>
            <p>Already have an acccount <Link to="/login" >Login</Link></p>
        </div>
    )
   
    
    
    
}

export default Register;
