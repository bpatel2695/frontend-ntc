import React from "react";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const Navigate = useNavigate()
    const handleSubmit = () => {
        Navigate("/login")
    }
  return (
    <div>
      Signup
      <p>
        <input type="text" placeholder="Enter Name"></input>
      </p>
      <p>
        <input type="text" placeholder="Enter Email"></input>
      </p>
      <p>
        Date of Birth:<input type="datetime-local"></input>
      </p>
      <button>Signup</button>
      <hr></hr>
      <button onClick={handleSubmit}>Already a member? Login Here...</button>
    </div>
  );
}   