import React from 'react'
import { imagesConstant } from '../../utils/ImageConstant'
import Button from '../Common/Button'

function HomeAbout() {
  return (
    <div className='w-full bg-[#F4F4F4]  py-10 mt-20 flex justify-center'>
         <div className="w-full flex flex-wrap container mx-auto">

         <div className="w-full lg:w-[50%]  flex p-8 flex-col justify-center lg:h-full">
            <img src={imagesConstant.Img1}/>        
      </div>

      <div className="w-full lg:w-[50%] p-8  flex flex-col justify-center gap-10 ">


        <p className=" text-xl lg:text-3xl font-semibold leading-loose">
        About Us
        </p>

        <p className="font-extralight text-base text-grayShade">
        Black Rock Trading FZ LLC has steadily grown from a local trading
firm to a reputable player in the global market. Our journey has 
been characterized by dedication, innovation, and a commitment 
to excellence.
        </p>

        <p className='font-normal text-base text-grayShade'>
        Import and export of a wide range of goods including, household
products, textiles, and more.Procurement services for businesses
seeking reliable suppliers
        </p>
        <Button text={'Read More'}/>

      </div>

    

    </div>
    </div>
  )
}

export default HomeAbout