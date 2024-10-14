import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateProjectInfoForm(){
    const navigate=useNavigate();
    const {id}=useParams();

    const [projectinfo,setProjectinfo]=useState({
        title: '',
        name: '',
        languageAndTool: '',
        content: '',
        price: 0
    });

    useEffect(()=>{
        let getProjectInfo=async()=>{
            await axios.get(`http://localhost:8000/projectinfo/${id}`)
            .then((res)=>setProjectinfo(res.data))
            .catch((e)=>console.log("err: "+e))
        }
       
        getProjectInfo()
    },[id])

    // Handle input changes to update the state
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setProjectinfo((prev) => ({
            ...prev,
            [name]: value, // Update the specific field dynamically
        }));
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:8000/updateprojectinfo/${id}`,projectinfo)
        .then((res)=>{
            if(res.data){
                navigate(`/projectinfo/${id}`);
            }
    });
    }

    return(
        <div>
        <h1>Update Project Info</h1>
       
        <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleOnChange} value={projectinfo.title}  id="title" placeholder="Title"/>
        <input type="text" name="name"    onChange={handleOnChange} value={projectinfo.name} id="name" placeholder="Name"/>
        <input type="text" name="lantool"  onChange={handleOnChange}   value={projectinfo.languageAndTool} id="langtool" placeholder="Language and Tool"/>
        <input type="text" name="content"  onChange={handleOnChange} id="content" value={projectinfo.content} placeholder="Content"/>
        <input type="number" name="price"  onChange={handleOnChange} id="price" value={projectinfo.price} placeholder="Price"/>
        <button>submit</button>
    </form>
    </div>
    )
}

export default UpdateProjectInfoForm;