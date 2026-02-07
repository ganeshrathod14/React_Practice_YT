import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-blue-400 text-black '>
      <h2 className='text-xl font-bold'>YouthVichaar</h2>
      <div className='flex gap-5 pr-20'>

      <Link className='text-lg font-bold' to='/' >Home</Link>
      <Link className='text-lg font-bold' to='/Contact' >Contact</Link>
      <Link className='text-lg font-bold' to='/About' >About</Link>
      <Link className='text-lg font-bold' to='/Products' >Products</Link>
      <Link className='text-lg font-bold' to='/Courses' >Courses</Link>
      </div>
    </div>
  )
}

export default Navbar