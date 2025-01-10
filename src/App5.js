import React, { useState } from 'react'
import "./App.css"

export default function App4() {
 
    const [count, setCount] =useState(5);
    const sub = () =>{
     setCount(count -1);
    };

    const add =() =>{
           setCount(count + 1);
    };
  return (
    <div >
   <div className='row'>
<button onClick={sub}>-</button>
<div>
    <p><input type ="number" value={count} onChange={(e) =>setCount(e.target.result)}></input></p>
</div>
<button onClick={add}>+</button>

</div>
   
    </div>
  )
}