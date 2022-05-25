import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Link to='/login' ><button className="btn btn-info" style={{margin:'2%'}}>Login</button></Link> 
        <Link to='/register'><button className="btn btn-info">Register</button></Link> 

    </div>
  )
}
