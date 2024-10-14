import React, {useEffect, useState}from 'react';
import './Navbar.css';
import {NavLink,Link} from 'react-router-dom';


function Navbar(){

    const [showMenu,setShowMenu]=useState(false);
    
   
    const [username,setUsername]=useState();

    useEffect(() => {
        const storedUsername = localStorage.getItem("currUser");
        setUsername(storedUsername ? JSON.parse(storedUsername) : null);
    }, []);

    const handleMenuItems=()=>{
        setShowMenu(!showMenu);

    }

    const autoCloseMenu=()=>{
        setShowMenu(false);
    }

    const logout=()=>{
        setUsername(localStorage.removeItem("currUser"))
    }
  

    return(
        
        <nav className='navbar'>
            
            <h1><Link to="/">drag_coder</Link></h1>
            <div className='links'>
                <ul className={(showMenu && "open").toString()}>
                    <li onClick={autoCloseMenu}><NavLink to="/addproject">Add Project</NavLink></li>
                    <li onClick={autoCloseMenu}><NavLink to='/register'>Register</NavLink></li>
                    {username ?<li className='nav-logout' onClick={logout}>Logout</li> :<li onClick={autoCloseMenu}><NavLink to='/login'>Login</NavLink></li>}
                    
                    
                    {username && <p  className='nav-username'>{username}</p>}
                    
                </ul>

            </div>

           
            <div className='menu-icon' onClick={handleMenuItems}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </nav>
    );
}

export default Navbar;