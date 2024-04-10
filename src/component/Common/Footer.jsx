import React from "react";
import { imagesConstant } from "../../utils/ImageConstant";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import OutlineButton from "./OutlineButton";

import { FaPinterestP } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";





const Footer = () => {
  return (
    <div>
      <div className="bg-grayShadeLight py-10">
        <div className="container py-5  mx-auto w-full max-w-screen-xl px-4 md:px-16">
          <div className="grid lg:grid-cols-4">
            <div>
              <img width="250px" src={imagesConstant.int7} alt="" />
            </div>
            <div>
              <img width="250px" src={imagesConstant.int4} alt="" />
            </div>

            <div>
              <h5 className="text-3xl">Contact Info</h5>
              <div>
                <p className="my-2 mt-3 flex items-center hover:text-wsDarker cursor-pointer transition duration-300">
                  <MdOutlineMailOutline />{" "}
                  <span className="ml-2">info@qwerftgh.com</span>
                </p>
                <p className="my-2 flex items-center hover:text-wsDarker cursor-pointer transition duration-300">
                  <MdAddCall />{" "}
                  <span className="ml-2">+987654563</span>
                </p>
                <p className="my-2 flex items-center hover:text-wsDarker cursor-pointer transition duration-300">
                  <FaMapMarkerAlt />{" "}
                  <span className="ml-2">
                    Dubai design district, building 1B, office 601, Dubai, UAE
                  </span>
                </p>
              </div>
            </div>
            <div>
              <h5 className="text-3xl">Muse Interior Design</h5>
              <div>
                <p className="my-2 mt-3 ">
                  Muse interior design LLC is specialized in providing stunning
                  and exceptional interior design services that include creative
                  space planning, 3D rendering, project supervision for
                  residential and commercial projects.
                </p>
                <OutlineButton name="Send Enquiry Now" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="bg-black">
        <div className="container mx-auto w-full max-w-screen-xl px-4 md:px-16">
          <div className="flex justify-between py-5">
            <div className="flex gap-5 text-white   transition duration-300items-center text-xl">
              <Link><RiFacebookFill/></Link>
              <Link><FaPinterestP/></Link>
              <Link><FaInstagram/></Link>
              <Link><FaWhatsapp/></Link>
            </div>
           <h2 className="text-xl text-white">© 2022 Muse Design LLC All Rights Reserved. Designed By <span className="text-wsDark">DeeDesigners</span></h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
