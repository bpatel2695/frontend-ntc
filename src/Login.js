import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const Navigate = useNavigate();
  const handleSubmit = () => {
    Navigate("/signup");
  };
  return (
    <div>
      Login
      <p>
        <input type="text" placeholder="Enter Email"></input>
      </p>
      <p>
        <input type="password" placeholder="Enter Password"></input>
      </p>
      <button>Login</button>
      <hr></hr>
      <button onClick={handleSubmit}>Create Account</button>
    </div>
  );
}