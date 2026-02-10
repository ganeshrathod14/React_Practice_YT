import React from 'react'
import Nav2 from './components/Nav2'
import Navbar from './components/Navbar'
import Button from './components/Button'
import { useContext } from 'react'
import { ThemeDataContext } from './context/Themecontext'

const App = () => {

const [theme] = useContext(ThemeDataContext)

  return (
    <div className={theme}>
      <Navbar/>
      <Button/>
    </div>
  )
}

export default App