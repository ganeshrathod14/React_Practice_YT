import React from 'react'

const App = () => {

const user = JSON.parse(localStorage.getItem('user'))

console.log(user)
console.log(typeof(user))

  return (
    <div>
      
    </div>
  )
}

export default App