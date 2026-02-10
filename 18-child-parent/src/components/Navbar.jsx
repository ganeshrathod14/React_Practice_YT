import React from 'react'

const Navbar = ({ theme, setTheme }) => {

  const ChangeTheme = () => {
    setTheme(prev => prev === "Light" ? "Dark" : "Light")
  }

  return (
    <div>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: theme === "Light" ? "#000" : "#fff",
          color: theme === "Light" ? "#fff" : "#000",
          border: "none",
          cursor: "pointer"
        }}
        onClick={ChangeTheme}
      >
        Change Theme
      </button>
    </div>
  )
}

export default Navbar
