import React from 'react'
import { useState } from 'react'

const App = () => {

    const [num, setNum] = useState({user:"Gannu",age:24})

   const btnClick = () => {

    const newNum = {...num} // these 3 dots are mendatory to sprade the object 
      console.log(newNum)
      newNum.user = "Gajju"
      newNum.age = 20
      setNum(newNum)
    }

  return (
    <>
    <div>
      <h1> {num.user} {num.age} </h1>
        <button onClick={btnClick} >click</button>
    </div>
    </>
  )
}

export default App