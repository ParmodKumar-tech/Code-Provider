
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import './index.css'
import AddProject from './assets/Components/Body/AddProject/AddProject'
import Navbar from './assets/Components/Navbar/Navbar'
import Register from './assets/Components/Body/Register/Register'
import Card from './assets/Components/Body/Card/Card';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './assets/Components/Login/Login';
import ProjectInfo from './assets/Components/Body/ProjectInfo/ProjectInfo'
import UpdateProjectInfoForm from './assets/Components/Body/UpdateProjectInfoForm/UpdateProjectInfoForm'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <div className='toaster'><Toaster  position="top-center"/></div>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Card/>}></Route>
        <Route path='/addproject' element={<AddProject/>}></Route>
        <Route path='/projectinfo/:id' element={<ProjectInfo/>}></Route>
        <Route path='/updateform/:id' element={<UpdateProjectInfoForm/>}></Route>
        
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    
      </Routes>


    
    </BrowserRouter>
 
)
