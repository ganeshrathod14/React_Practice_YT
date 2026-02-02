import axios from 'axios'
import { useState } from 'react'

const App = () => {

    const [data, setData] = useState([])

 const getdata = async() => {

   const response = await axios.get('https://picsum.photos/v2/list')

   setData(response.data)
   


 }

  return (
    <div className='p-10'>
      <button className='h-20 w-30 rounded bg-amber-500 text-cyan-50' 
      onClick={() => {
        getdata()
      }}>Get Data </button>
      <div>
        {data.map((elem,idx) => {
          return <h3 className='font-bold text-5xl'>hello, {elem.author}  </h3>
        })}
      </div>
    </div>
  )
}

export default App