import React, { useEffect } from "react";
import { imagesConstant } from "../../utils/ImageConstant";
import Button from "../Common/Button";
import Aos from "aos";

function HomeComponents() {
  useEffect(() => {
    Aos.init({
      duration:0,
      delay:0, // Animation duration (in milliseconds)
      //   once: , // Whether animation should happen only once
    });
  }, []);
  return (
    <div   className="w-full flex flex-wrap-reverse container mx-auto">
      <div data-aos="fade-up"  className="w-[90%] mx-auto lg:w-[50%] mt-10 lg:mt-0  flex flex-col justify-center gap-3 lg:gap-10 ">
        <p className=" text-2xl lg:text-6xl font-semibold ">
          <span className="text-blueShade"> Solutions </span> For

        </p>

        <p className=" text-2xl lg:text-6xl font-semibold ">
          Any Corner
        </p>

        <p className="font-medium text-base">
          Urban crafty furniture with modern, simple and
          <br />
          elegant designs for your hopme
        </p>
        <Button/>

      </div>

      <div data-aos="fade-up"  className="w-full lg:w-[50%] border flex flex-col justify-center h-full">
            <img src={imagesConstant.table}/>        
      </div>

    </div>
  );
}

export default HomeComponents;
