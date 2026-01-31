import React from 'react'

const App = () => {

   const moving=(val) => {
    console.log(val)
   }
   const moving1=(val) => {
    console.log(" Clicked ")
   }

  return (
    <>
    <div onMouseMove={(elem) => {
      moving(elem.clientX,elem.clientY)
    }} className='box'>
    </div>

    <button onClick={(elem)=> {
      moving1(elem.target.value)
    }}> click me  </button>

    </>
  )
}

export default App