import React from 'react'
import { Link } from 'react-router-dom'
import  "./Header.css"

export default function Header(props) {
  const mystyle = {
    backgroundColor:'silver'
  }
  return (
    <div className='header'>
      <h1 style={{color:"blue"}}>Online Store[{props.name}-{props.age}]</h1>
      <p style={mystyle}>
            <Link to="/main">Home</Link> | <Link to="/cart">Cart</Link> | <Link to="/orders">Orders</Link> |
            <Link to="/admin">Admin</Link> |
            <Link to="/login">Login</Link>
        </p>
      <hr></hr>
    </div>
    
  )
}