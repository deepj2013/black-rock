import React from 'react'
import { imagesConstant } from "../utils/ImageConstant";
import Button from '../component/Common/Button';
import Footer from '../component/Common/Footer';
function Contact() {
  return (
    <div className="w-screen mx-auto pt-32 h-screen ">
    <p className=" text-2xl text-center lg:text-3xl font-semibold leading-loose">
    Contact us
    </p>


    <div className='h-screen w-screen mt-10' style={{ background: `url(${imagesConstant.contact})`, backgroundRepeat: 'no-repeat',backgroundSize:'cover' }}>
        <div className='absolute h-full w-full bg-black/50'>
          <p className='text-2xl text-white font-semibold lg:text-3xl p-10'>Send us a message</p>

          <div className='p-10 flex gap-6 flex-wrap text-white'>
            <input placeholder='Your Name' className='bg-white/30 border border-white/40 px-4 p-2 py-3 rounded-md w-[40%] text-white'/>
            <input placeholder='Your Name' className='bg-white/30 border rounded-md border-white/40 px-4 p-2 w-[40%]'/>
            <textarea placeholder='Message' className='bg-white/30 border h-36 rounded-md border-white/40 px-4 p-2 w-[40%]'/>
          </div>
        <div className='mx-10'>
          <Button name={'Send a message'}/>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact