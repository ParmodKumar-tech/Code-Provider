import React, {useEffect, useState}from 'react';
import './Navbar.css';
import {NavLink,Link,useNavigate} from 'react-router-dom';


function Navbar(){

    const [showMenu,setShowMenu]=useState(false);
    const navigate=useNavigate();
   
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
        navigate("/")
    }
  
  
    return(
        
        <nav className='navbar'>
            
            <h1><Link onClick={autoCloseMenu} to="/">drag_coder</Link></h1>
            <div className='links'>
                <ul className={(showMenu && "open").toString()}>
                    <li onClick={autoCloseMenu}>
                    <NavLink 
                    to={username ? "/addproject":"/login"}
                    className={({ isActive }) => username ? isActive ? "active" : "":""}>
                       
                        Add Project
                        </NavLink></li>
                    
                    
                    {username ? (
                        <>
                            <li className='nav-logout' onClick={logout}>Logout</li>
                            <p className='nav-username'>{username}</p>
                        </>
                    ) : (
                        <>
                            <li onClick={autoCloseMenu}>
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    Register
                                </NavLink>
                            </li>
                            <li onClick={autoCloseMenu}>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    Login
                                </NavLink>
                            </li>
                        </>
                    )}
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