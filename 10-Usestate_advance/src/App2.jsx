import React from 'react'
import { useState } from 'react'

const App2 = () => {

    const [Num, setNum] = useState(24)

    const btnClick = () => {
     // let newNum = [...Num]
    //    newNum.push(40)
        setNum(prev=>(prev+1))
         setNum(prev=>(prev+1))
          setNum(prev=>(prev+1))
          

    
    }

  return (
    <div>
        <h1> {Num}  </h1>
        <button onClick={btnClick}>click</button>
    </div>
  )
}

export default App2