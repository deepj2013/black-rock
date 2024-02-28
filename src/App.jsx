import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Product from './pages/Product'
import { ProductInfromation } from './pages/ProductInfromation'
import OurServices from './pages/OurServices'
import Contact from './pages/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"; 


function App() {
  useEffect(() => {
    Aos.init({
      duration:0,
      delay:0, // Animation duration (in milliseconds)
      //   once: , // Whether animation should happen only once
    });
  }, []);
  
  return (
    <div className=" mx-auto bg-white h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productInfomation" element={<ProductInfromation />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<Contact />} />

        
      </Routes>
    </div>
  );
}

export default App