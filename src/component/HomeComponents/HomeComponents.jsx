import React, { useEffect } from "react";
import { imagesConstant } from "../../utils/ImageConstant";
import Button from "../Common/Button";
import Aos from "aos";

function HomeComponents() {
  
  return (
  //  <div className="hero-section">
  //    <div   className="w-full flex flex-wrap-reverse container mx-auto ">
  //     <div data-aos="fade-up " className="text-white">
  //       <p className=" text-2xl lg:text-6xl font-semibold text-white">
  //         <span className="text-wsDark"> Solutions </span> For

  //       </p>

  //       <p className=" text-2xl lg:text-6xl font-semibold ">
  //         Any Corner
  //       </p>

  //       <p className="font-medium text-base">
  //         Urban crafty furniture with modern, simple and
  //         <br />
  //         elegant designs for your hopme
  //       </p>
  //       <Button/>

  //     </div>

      

  //   </div>
  //  </div>
  <div className="relative">
      {/* Background */}
      <div
        className="bg-cover bg-center h-8 md:h-screen"
        style={{
          backgroundImage:
            "url('https://musedesign.ae/wp-content/uploads/2021/06/beauty-salon.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-start justify-center md:px-16 px-4 w-full lg:w-8/12">
          <h1 className="text-white  text-4xl md:text-4xl lg:text-6xl font-bold">
          No.1 <span className="text-wsDark">Muse Interior Design Dubai Company</span> in UAE
          </h1>
          <p className="mt-5 text-white">Are you looking for the best interior decorator in the UAE? If yes, then you are welcome to the top-notch muse interior design Dubai company that is established to provide luxurious interiors for commercial & residential areas.</p>
          <div className="my-10 ">
          <Button/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponents;
