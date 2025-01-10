import React from "react";
import { useState } from "react";
import { useContext } from 'react'
import { UserContext } from './App'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export default function Signup() {
  const {user,setUser} = useContext(UserContext)
  // const [name,setName] = useState()
  const [pass,setPass] = useState()
  const [email,setEmail] = useState()
    const Navigate = useNavigate()
    const handleSubmit = () => {
        Navigate("/login")
    }
    const url = "http://localhost:8080/users"
    const handleSignup = async () => {
      // const result = await axios.post(url,{name:name,pass:pass,email:email})
      const result = await axios.post(url,{name:user,pass:pass,email:email})
      Navigate ("/Main");
    }
  return (
    <div>
      Signup
      <p>
        <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder="Enter Name"></input>
      </p>
      {/* <p>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"></input>
      </p> */}
      <p>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"></input>
      </p>
      <p>
      <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Enter Password"></input>
      </p>
      <button onClick={handleSignup}>Signup</button>
      <hr></hr>
      <button onClick={handleSubmit}>Already a member? Login Here...</button>
    </div>
  );
}