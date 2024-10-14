import React, { useState,useEffect } from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';


function ProjectInfo() {

    const {id}=useParams();
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    
    useEffect(()=>{
        const getDataFromURL=async()=>{
            let res=await axios.get(`http://localhost:8000/projectinfo/${id}`)
            setData(res.data);
           
        }

        getDataFromURL()
    },[id])

    const handlDelete=async()=>{
        try{
            await axios.get(`http://localhost:8000/delete/${id}`)
            .then((res)=>{
                if(res.data){
                    navigate('/');
                }
            });
        }
        catch(e){
            console.log("err"+e);
            console.log("please try again");
        }
    }

    
    return ( 
       
        <div key={data.id} className="card">
                    <h1>Code Info.</h1>

                    <h3>Title:{data.title}</h3>
                    <p>Name:{data.name}</p>
                    <p>Language & Tool:{data.languageAndTool}</p>
                    <p>Content:{data.content}</p>
                    <p>Price:{data.price}</p>
                    <Link to={`/updateform/${data._id}`}>Update</Link>
                    <Link onClick={handlDelete}>Delete</Link>
                        
                    
            </div>
        
     );
}

export default ProjectInfo;