import React from "react";
import { imagesConstant } from "../utils/ImageConstant";
import Button from "../component/Common/Button";
import Footer from "../component/Common/Footer";
import OverlayBanner from "../component/Common/OverlayBanner";
import FillBlackButton from "../component/Common/FillBlackButton";
import { MdAddCall, MdOutlineMailOutline } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import OverlayBannerVideo from "../component/Common/OverlayBannerVideo";
function Contact() {
  return (
    <div>
      <div className="relative">
        {/* Background */}
        <div
          className="bg-cover bg-center h-48 md:h-64"
          style={{
            backgroundImage:
              "url('https://musedesign.ae/wp-content/uploads/2021/06/beauty-salon.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-75"></div>
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center md:px-16 px-4">
            <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <div className="  container py-10  mx-auto w-full max-w-screen-xl px-4 md:px-16">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="p-5">
            <h2 className="text-3xl my-3 font-bold">Get Free Quote</h2>
            <p className="my-5">
              We are Trying Our Best to Deliver Our Customers Real High-Quality
              Services With Satisfaction Our Top Priority.
            </p>
            <form action="">
              <div className="grid grid-cols-2 gap-4 text-gray-500">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Subject" />
              </div>
              <div className="grid grid-cols-1 gap-4 my-4 text-gray-500">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="p-4"
                ></textarea>
              </div>
              <FillBlackButton name="Submit" />
            </form>
          </div>
          <div className="p-5 flex justify-center items-center">
            <div >
              <div >
                <p className="my-2 flex items-center text-2xl hover:text-wsDark cursor-pointer transition duration-300">
                  <FaMapMarkerAlt />{" "}
                  <span className="ml-4">
                    Dubai design district, building 1B, office 601, Dubai, UAE
                  </span>
                </p>
                <p className="my-2 mt-3 flex items-center text-2xl hover:text-wsDark cursor-pointer transition duration-300">
                  <MdOutlineMailOutline />{" "}
                  <span className="ml-4">info@qwerftgh.com</span>
                </p>
                <p className="my-2 flex items-center text-2xl hover:text-wsDark cursor-pointer transition duration-300">
                  <MdAddCall /> <span className="ml-4">+987654563</span>
                </p>
              </div>
              <div>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7221.350918276685!2d55.298147!3d25.180434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433ee13b6801%3A0x28a16bd592be6aae!2sMuse%20Interior%20Design!5e0!3m2!1sen!2sus!4v1712242703173!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </div>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
