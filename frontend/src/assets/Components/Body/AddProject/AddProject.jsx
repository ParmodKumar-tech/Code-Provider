import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import app from '../../../../../firebase';
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage";
import './AddProject.css';
import toast from 'react-hot-toast';

function AddProject() {
  
    const [details,setDetails]=useState({
        name:"",
        languageAndTool:"",
        content:"",
        price:"",
        image:""
    });


 
    const navigate=useNavigate();
    const [imageFile,setImageFile]=useState(null);

    let handleImageField = async (e) => {
        const image = e.target.files[0];
        setImageFile(image);
       
    };




    let handleSubmit= async(e)=>{
        e.preventDefault();
       
            if(imageFile){
                console.log(imageFile)
                try {
                    const storage = getStorage(app);
                    const storageRef = ref(storage, "images/" + imageFile.name);
                    await uploadBytes(storageRef, imageFile);
                    const downloadURL = await getDownloadURL(storageRef);
                   
        
                    setImageFile(downloadURL);
                   
                    const updatedDetails = {
                        ...details,
                        image: downloadURL // Add the image URL to the details
                    };

                    let res=await axios.post("http://localhost:8000/add-source-code",updatedDetails)
                    
                    if(res.data){
                        navigate('/')
                        toast.success("Project added successfully!")
                    }
                    else{
                        toast.error("Failed to add the project");

                    }
                   
                           
                } catch (e) {
                    toast.error(e);
                }
            }
           
    }

    let handleOnChange=(e)=>{
        const {name,value}=e.target;
        console.log(e.target.files);
       setDetails((prev)=>{
        return {...prev,[name]:value}
       })
       
    }

    

    return (
    <div className='addProject'>
    <h1>Add Source Code</h1>
    <form onSubmit={handleSubmit}>
        <input required type='file' name="thumbnail" id="thumbnail" placeholder='upload your img' onChange={handleImageField}/>
        <input required type="text" name="title" onChange={handleOnChange} id="title" placeholder="Title"/>
        <input required type="text" name="name"  onChange={handleOnChange} id="name" placeholder="Name"/>
        <input required type="text" name="languageAndTool" onChange={handleOnChange} id="languageAndTool" placeholder="Language and Tool"/>
        <input required type="text" name="content" onChange={handleOnChange} id="content" placeholder="Content"/>
        <input required type="number" name="price" onChange={handleOnChange}id="price" placeholder="Price"/>
        <button required type="submit">submit</button>
    </form>
    </div>
    );
}

export default AddProject;