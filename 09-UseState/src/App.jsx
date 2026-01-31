import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [count, setcount] = useState(0)
  

  return (
   <>
   <h1> Value of Count is {count} </h1>
   <button onClick={() => {
    setcount(count + 1)
   }}> Increase </button>

   <button onClick={() => {
    setcount(count - 1)
   }}> Decrease </button>
   
   </>
   
  )
}

export default App