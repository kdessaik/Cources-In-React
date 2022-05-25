import React from 'react'
import { BrowserRouter as Router,  Routes, Route, Link } from "react-router-dom";
import RegisterComponent from './Login';
import Registration from './Registration'
import Home from './Home'
import NavPages from './NavPages'

export default function RegisterOrLogin() {
  return (
    <Router>
        <NavPages/>

        <Routes>
           <Route path='/' element={ <Home/>}/>
            <Route path='/Login' element={<RegisterComponent/>} />
            <Route path='/Register' element={ <Registration/>}/>
        </Routes>
    </Router>
  )
}






