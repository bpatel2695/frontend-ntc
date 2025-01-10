import React, { createContext, useContext, useState } from "react";
import Child1 from "./Child1";
// UserContext = createContext(); is Global variable 
export const UserContext = createContext();
export default function App5() {
  const [user, setUser] = useState("John");
  const handleSubmit = () => {
    setUser("Mike")
  }
  return (
    <UserContext.Provider value={{user,setUser}}>
      {user}
      <button onClick={handleSubmit}>Submit</button>
      <hr></hr>
      <Child1 />
      </UserContext.Provider>
  );
}