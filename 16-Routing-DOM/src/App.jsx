import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./componants/Navbar";
import Products from "./Pages/Products";

const App = () => {
  return (
    <div className="bg-gray-500 h-screen w-full">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={ <Contact/> } />
        <Route path='/Products' element={<Products/>} />
      </Routes>
    </div>
  );
};

export default App;
