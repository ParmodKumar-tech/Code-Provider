import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AddProject from './assets/Components/Body/AddProject/AddProject'
import Navbar from './assets/Components/Navbar/Navbar'
import Register from './assets/Components/Body/Register/Register'
import Card from './assets/Components/Body/Card/Card';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './assets/Components/Login/Login';
import ProjectInfo from './assets/Components/Body/ProjectInfo/ProjectInfo'
createRoot(document.getElementById('root')).render(

  <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Card/>}></Route>
        <Route path='/addproject' element={<AddProject/>}></Route>
        <Route path='/projectinfo' element={<ProjectInfo/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    
      </Routes>
    
    </BrowserRouter>
 
)
