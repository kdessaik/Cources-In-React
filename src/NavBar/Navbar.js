import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  
  return (
    <>
    <ul>
      <li>
       <a> <Link to='/' style={{color:'red', fontSize:'70px'}}>Home</Link> </a>
      </li>
      <li>
        <Link to='./about' style={{color:'red', fontSize:'70px'}}>About</Link></li>
      <li>
        <Link to="./contact" style={{color:'red', fontSize:'70px'}}>Contact</Link></li>
    </ul>
    
    
  
    
    </>
  )
}
