import React, { useState } from 'react';
import axios from 'axios';

function AddProject() {

    const [title,setTitle]=useState();
    const [name,setName]=useState();
    const [languageAndTool,setLanguageAndTool]=useState();
    const [content,setContent]=useState();
    const [price,setPrice]=useState();

    let handleSubmit= async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/source-code",{title,name,languageAndTool,content,price})
        .then((res)=>console.log(res.data))
        .catch((e)=>console.log(e))
    }


    return (
    <div>
    <h1>Add Source Code</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} id="title" placeholder="Title"/>
        <input type="text" name="name" onChange={(e)=>setName(e.target.value)} id="name" placeholder="Name"/>
        <input type="text" name="lantool" onChange={(e)=>setLanguageAndTool(e.target.value)} id="langtool" placeholder="Language and Tool"/>
        <input type="text" name="content" onChange={(e)=>setContent(e.target.value)} id="content" placeholder="Content"/>
        <input type="number" name="price" onChange={(e)=>setPrice(e.target.value)} id="price" placeholder="Price"/>
        <button>submit</button>
    </form>
    </div>
    );
}

export default AddProject;