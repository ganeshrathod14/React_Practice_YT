import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/Themecontext'

const Button = () => {

   const  [theme,setTheme] = useContext(ThemeDataContext)

   const themebtn = () => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

  return (
    <div>
        <button onClick={()=>{
            themebtn()
        }}>Change Theme {theme} </button>
    </div>
  )
}

export default Button