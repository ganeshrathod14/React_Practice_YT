import React, { useEffect, useState } from 'react'
import BellEx from './Components/BellEx'

const App = () => {
  
  const [num, setNum] = useState(0)
  const [Num2, setNum2] = useState(100)

  useEffect(()=>{
    console.log("use efect is running ...")
  },[num])
   
  return (
    <div>
      <h1> {num} </h1>
      <h1> {Num2} </h1>
      <button 
      onMouseEnter={() => [
        setNum(num + 1)
      ]}
      onMouseLeave={()=>{
        setNum2(Num2 + 10)
      }}
      >click</button>
    
    </div>
  )
}

export default App