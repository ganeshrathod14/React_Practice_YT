import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-sky-800 py-2 text-center text-2xl font-bold text-white'>
        <button onClick={(() => navigate('/'))}
       className='bg-orange-500 p-3 rounded m-3 active:scale-95'>
         Back to Home page 
         </button>
         <button onClick={(() => navigate(-1))}
       className='bg-orange-500 p-3 rounded m-5 active:scale-95'>
         Back  
         </button>
         <button onClick={(() => navigate(+1))}
       className='bg-orange-500 p-3 rounded m-5 active:scale-95'>
         Next  
         </button>
    </div>
  )
}

export default Navbar2