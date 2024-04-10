import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";


import { FaCheckCircle } from "react-icons/fa";

const ContactButton = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-10 mx-16 ">
      <button className="flex items-center justify-center  bg-greenDark hover:bg-white  hover:text-greenDark border-2 hover:border-greenDark py-1 rounded  px-5 focus:outline-none focus:ring-0 text-white transition duration-500">
        <FaCheckCircle /> <span className="ml-2">See Our Projects</span>
      </button>
      <button className="flex items-center justify-center  bg-greenDark hover:bg-white  hover:text-greenDark border-2 hover:border-greenDark py-1 rounded   px-5 focus:outline-none focus:ring-0 text-white transition duration-500">
        <FaWhatsapp />{" "}
        <span className="ml-2">Request Availability by WhatsApp</span>
      </button>
      <button className="flex items-center justify-center  bg-wsDark hover:bg-white  hover:text-wsDark border-2 hover:border-wsDark py-1 rounded   px-5 focus:outline-none focus:ring-0 text-white transition duration-500">
        <MdOutlineEmail />{" "}
        <span className="ml-2">Request Availability by Email</span>
      </button>
    </div>
  );
};

export default ContactButton;
