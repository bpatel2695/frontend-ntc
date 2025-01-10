import React from 'react'
import { useContext } from 'react'
import { UserContext } from './App5'
export default function Child1() {
    const {user,setUser} = useContext(UserContext)
    const handleSubmit = () => {
        setUser("Cathy")
    }
  return (
    <div>
        {user}
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}