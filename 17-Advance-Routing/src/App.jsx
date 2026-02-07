import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact' 
import Notfound from './pages/Notfound'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'


const App = () => {
  return (
    <div className='bg-neutral-700 h-screen w-full text-white '>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Courses' element={<Courses/>} />
          <Route path='/Courses/:CourseID' element={<CourseDetail/>}  />
          <Route path='/Products' element={<Product/>} >
          <Route path='men' element={<Men/>} />
          <Route path='Women' element={<Women/>} />
          <Route path='kids' element={<Kids/>} />
          </Route>
          <Route path='/Products/men' element={<Men/>} />
          <Route path='/Products/Women' element={<Women/>} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App