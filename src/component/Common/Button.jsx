import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Button = ({ name }) => {
  return (
    <button className="bg-theme py-3.5 font-medium  w-[250px] px-2  rounded-sm text-black flex items-center justify-center gap-4">
      {name ? name : "Explore Now"}
      <FaArrowRight/>
    </button>
  );
};

export default Button;
