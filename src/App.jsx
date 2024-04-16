import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router'
import About from './pages/About'
import Product from './pages/Product'
import { ProductInfromation } from './pages/ProductInfromation'
import OurServices from './pages/OurServices'
import Contact from './pages/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"; 
import { FaSearchengin } from 'react-icons/fa6'
import { IoLogoFlickr } from "react-icons/io5";
import ProductCategory from './pages/ProductCategory'
import Admin from './admin/Admin'
import Dashboard from './admin/DashboardPages/Dashboard'
import logo from './assets/logo.png';
import Portfolio from './pages/Portfolio'



function App() {
  useEffect(() => {
    Aos.init({
      duration:0,
      delay:0, // Animation duration (in milliseconds)
      //   once: , // Whether animation should happen only once
    });
  }, []);


  const location = useLocation();
  var currentPathname = location.pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getToken=localStorage.getItem('isLoggedIn');
  useEffect(() => {
    if(getToken){
      setIsLoggedIn(true)
    }
    else{
      setIsLoggedIn(false)
    }
  }, []);

  const token=localStorage.getItem('token');
  return (
    <>
   {!isLoggedIn && <div className=''>
    <div className=" mx-auto  overflow-scroll h-screen relative rounded-2xl">
    <div className='fixed h-screen w-20 hidden lg:flex  bg-background z-50 rounded-t-lg overflow-hidden'>
      <div>
        <div className=' h-20 bg-white  w-20 flex justify-center items-center rounded-t-lg'>
        <img src ={logo} />
        </div>
      </div>
    </div>
    <div className='lg:ml-20'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productInfomation" element={<ProductInfromation />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ProductCategory" element={<ProductCategory />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Admin" element={<Admin  setIsLoggedIn={setIsLoggedIn}/>} />

      </Routes>
      </div>
      
    </div>
      
      </div>}

  {isLoggedIn &&    <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />

        
      </Routes>}
      </>
  );
}

export default App