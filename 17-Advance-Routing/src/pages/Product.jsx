import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-4 pt-5 items-center'>
            <Link to='/Products/Men'> Men </Link>
            <Link to='/Products/Women'> Women </Link>
            <Link to='/Products/Kids'>Kids</Link>
        </div>
        
        <Outlet/>
    </div>
  )
}

export default Product