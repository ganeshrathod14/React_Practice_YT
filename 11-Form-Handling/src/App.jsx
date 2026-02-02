import React from 'react'

const App = () => {

    const submitevent = (e) => {
      e.preventDefault()
      console.log("Form Submited")   ,  {/* 5) Hum JS se decide karte hain kya karna hai  */}

    }

  return (
    <>
    <div>
      <form onSubmit={(e)=> {   {/* 3) React us event ko onSubmit ko deta hai   */}
        submitevent(e)           , { /* 04) onSubmit me jo function diya hai wo chalta hai */ }      
      }}>
        <input type="text" placeholder='Enter Name' />
        <input type="submit" />   {/* 1) User Submit button dabata hai   */}  {/* 02) Browser "submit" event banata hai*/}
      </form>
    </div>
    </>
  )
}

export default App