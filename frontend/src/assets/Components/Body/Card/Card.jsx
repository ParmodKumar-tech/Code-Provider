import React, { useEffect, useState } from 'react';
import './Card.css';
import axios from 'axios'
import {Link} from 'react-router-dom'

function Card() {

    const [data,setData]=useState([]);

    useEffect(()=>{
        const getData=async()=>{
            try{
                await axios.get('http://localhost:8000/all-source-code')
                .then((res)=>setData(res.data))
                
            }
            catch(e){
                console.log(e)
            }
        };
        getData();
    },[])
    


    return ( 

        <div className="main">

        {
            data.map((item,id)=>{
                return(

                    <div key={id} className="card">
                    <h4>Title:{item.title}</h4>
                    <img src="/images/img.jpg" alt="card-image"/>
                    
                        <div className='card-info' >
                            <ul>
                                <li>Name :{item.name}</li>
                                <li>Language & Tool : {item.languageAndTool}</li>
                                <li>Content : {item.content}</li>
                                <li>Price : {item.price}</li>
                            </ul>
        
                        </div>
                    <Link className="card-btn" to="/projectinfo">Buy</Link>
                    
            </div>
                )
            })
        }
   </div>

    );
}

export default Card;