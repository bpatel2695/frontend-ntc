import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [result, setResult] = useState();
  const Navigate = useNavigate();
  const handleSubmit = () => {
    Navigate("/signup");
  };
  const url = "http://localhost:8080/find";
  const handleLogin = async () => {
    const result = await axios.post(url, { email, pass });
    // console.log(result.data.message)
    // let flag = result.data.message ? "Access Granted" : "Access Denied";
    // setResult(flag);
    if (result.data.message) Navigate("/main");
    else setResult("Access Denied");
  };
  return (
    <div>
      Login
      <h2>{result}</h2>
      <p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        ></input>
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter Password"
        ></input>
      </p>
      <button onClick={handleLogin}>Login</button>
      <hr></hr>
      <button onClick={handleSubmit}>Create Account</button>
    </div>
  );
}