import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProject() {

    const [details,setDetails]=useState({
        name:"",
        languageAndTool:"",
        content:"",
        price:""
    });
 
    const navigate=useNavigate();

    let handleSubmit= async(e)=>{
        e.preventDefault();
        let res=await axios.post("http://localhost:8000/add-source-code",details)
        .then((res)=>{
            if(res.data){
                navigate('/')
            }
            else{
                console.log("not redirect")
            }
        })
        .catch((e)=>console.log(e))
    }

    let handleOnChange=(e)=>{
        const {name,value}=e.target;
        
       setDetails((prev)=>{
        return {...prev,[name]:value}
       })
       
    }

    return (
    <div>
    <h1>Add Source Code</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleOnChange} id="title" placeholder="Title"/>
        <input type="text" name="name"  onChange={handleOnChange} id="name" placeholder="Name"/>
        <input type="text" name="lantool" onChange={handleOnChange} id="langtool" placeholder="Language and Tool"/>
        <input type="text" name="content" onChange={handleOnChange} id="content" placeholder="Content"/>
        <input type="number" name="price" onChange={handleOnChange}id="price" placeholder="Price"/>
        <button>submit</button>
    </form>
    </div>
    );
}

export default AddProject;