import React from "react";
import { imagesConstant } from "../../utils/ImageConstant";
import { MdOutlineMailOutline, MdAddCall } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPinterestP, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto w-full max-w-screen-xl px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img width="250px" src={Logo} alt="Primary Logo" />
          </div>
          <div>
            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-500 my-3">
              Black Rock Trading FZ-LLC
            </p>
            <p className="flex items-center my-3 text-xl hover:text-gray-300 cursor-pointer transition duration-300">
              <MdOutlineMailOutline className="text-2xl mr-2" />
              info@blackrock-uae.com
            </p>
            <p className="flex items-center my-3 text-xl hover:text-gray-300 cursor-pointer transition duration-300">
              <MdAddCall className="text-2xl mr-2" />
              +971-52967 5363
            </p>
          </div>
        </div>
        <div className="flex justify-between py-5">
          <div className="flex gap-5 items-center text-xl transition duration-300">
            <Link to="/facebook"><RiFacebookFill /></Link>
            <Link to="/pinterest"><FaPinterestP /></Link>
            <Link to="/instagram"><FaInstagram /></Link>
            <Link to="/whatsapp"><FaWhatsapp /></Link>
          </div>
          <h2 className="text-xs text-white">
            ©2024 Black Rock | All Rights Reserved. Designed By <a href="https://ameerait.com" className="text-blue-400 hover:text-blue-300">AICS</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
