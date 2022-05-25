import React from 'react'
import { Link } from 'react-router-dom'

export default function NavPages() {
  return (
    <div> <h1>NavPages</h1>
        <span><Link to='/'className="btn btn-dark" style={{margin:'2%'}}>Home</Link> </span>
        <span><Link to='/Login' className="btn btn-dark" style={{margin:'2%'}}>Login</Link> </span>
        <span><Link to='/register' className="btn btn-dark" style={{margin:'2%'}}>Register</Link> </span>
    </div>
  )
}
