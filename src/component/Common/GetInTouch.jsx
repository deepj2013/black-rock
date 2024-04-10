import React from "react";
import { imagesConstant } from "../../utils/ImageConstant";
import ContactButton from "./ContactButton";

const GetInTouch = () => {
  return (
    <div className="my-14">
      <div className="">
        <h2 className="text-center text-wsDark text-3xl font-semibold uppercase">
          Get In Touch With Us
        </h2>
      </div>
      <div className="flex justify-center">
        <img width="300px" src={imagesConstant.arrowDesign} alt="" />
      </div>
      <p className="my-1  uppercase text-center">
        WE ARE LOCATED OPPOSITE TO THE HIGHEST BUILDING IN THE WORLD BURJ
        KHALIFA
      </p>
      <div className="my-5">
        <ContactButton />
      </div>
    </div>
  );
};

export default GetInTouch;
