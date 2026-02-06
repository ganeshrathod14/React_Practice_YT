import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 py-5 items-center border-2 bg-green-300">
        <h2 className="flex flex-wrap pl-2">FarmNest</h2>
        <div className="flex justify-between pr-20 gap-5 items-center " >
          <Link to='/' > Home </Link>
          <Link to='/About' > About </Link>
          <Link to='/Contact' > Contact </Link>
          <Link to='/Products' > Products </Link>

        </div>
      </nav>
  )
}

export default Navbar