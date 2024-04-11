import React, { useEffect } from "react";
import { imagesConstant } from "../../utils/ImageConstant";
import Button from "../Common/Button";
import Aos from "aos";
import { FaArrowRight } from "react-icons/fa6";
import BG from '../../assets/BgVedio.mp4'
function HomeComponents() {
  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <div className="bg-cover bg-center h-screen relative px-4 md:px-0">
        <video autoPlay muted loop className="absolute inset-0 w-full h-screen lg:h-full object-cover">
          <source src={BG} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute h-full inset-0 bg-black opacity-70"></div>
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-start justify-center w-full container mx-auto text-white px-4 md:px-8 lg:px-28">
          <p className="text80 font-bold leading-[32px] mt-32">
            No.1 <span className="text-theme">Solutions For </span>
          </p>
          <p className="text80 font-bold leading-[32px] mt-10 mb-5">
          any Corner
          </p>
          <div className=" w-[100%] lg:w-[50%]  3xxl:w-[30%] ">
          <p className="mt-5">
            Urban crafty furniture with modern, simple and elegant designs for
            your home Urban crafty furniture with modern, simple and elegant
            designs for your home
          </p>
          </div>
          <div className="my-10 flex gap-10 flex-wrap">
            {/* Your Button Component */}
            <Button />
            {/* Example Button */}
            <button className=" py-3.5 font-medium  border border-white w-[250px] px-2  rounded-sm text-white flex items-center justify-center gap-4">
              Contact <FaArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponents;
