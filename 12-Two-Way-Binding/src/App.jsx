import React, { useState } from 'react'

const App = () => {

    const [name, setname] = useState('')

    const submitevent = (e) => {
      e.preventDefault()
      console.log("form submited by ", {name})
      setname('')    // this logic can set page empty as like start 
    }

  return (
    <div>
      {/* <h1> form submitted by {name} </h1> */}
      <form onSubmit={(e) => {
        submitevent(e)
      }}>
        <input 
        type="text"  
        placeholder='Enter Your name'
        value={name}
        onChange={(e) => {
            setname(e.target.value)
        }}  
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App