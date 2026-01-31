import React from 'react'

const App = () => {

    const submitevent = (e) => {
      e.preventDefault()
      console.log("Form Submited")

    }

  return (
    <>
    <div>
      <form onSubmit={(e)=> {
        submitevent(e)
      }}>
        <input type="text" placeholder='Enter Name' />
        <input type="submit" />
      </form>
    </div>
    </>
  )
}

export default App