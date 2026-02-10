import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState("Light")

  const themeStyle = {
    Light: {
      backgroundColor: "#ffffff",
      color: "#000000"
    },
    Dark: {
      backgroundColor: "#121212",
      color: "#ffffff"
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        ...themeStyle[theme]
      }}
    >
      <h1>Theme Is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
