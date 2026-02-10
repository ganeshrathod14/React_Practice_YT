import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ThemeDataContext = createContext()

const Themecontext = (props) => {

    const [theme, setTheme] = useState("light")

  return (
   
        <ThemeDataContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeDataContext.Provider>

  )
}

export default Themecontext