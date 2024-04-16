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
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-5">
            <h2 className="text-3xl my-3 font-bold">
              Contact Us for a Free Quote
            </h2>
            <p className="my-5">
              At <b>BLACK ROCK </b>, based in Dubai, we are committed to delivering
              top-tier services in exporting interiors, furniture, and household
              items. Ensuring your satisfaction is our priority, and we strive
              to provide real high-quality solutions tailored to meet your
              needs. Reach out to us to experience unparalleled excellence in
              every transaction.
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
            <div>
              <div>
                <p className="my-2 flex items-center text-3xl cursor-pointer transition duration-300 hover:text-black">
                  <span className="ml-5 relative block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-500">
                    Black Rock Trading FZ-LLC
                  </span>
                </p>
                <p className="my-2 flex items-center text-2l hover:text-wsDark cursor-pointer transition duration-300">
                  <FaMapMarkerAlt />{" "}
                  <span className="ml-2">
                    FOB50524, Compass Building, Al Shohada Road, AL Hamra
                    Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates
                  </span>
                </p>
                <p className="my-2 mt-3 flex items-center text-2l hover:text-wsDark cursor-pointer transition duration-300">
                  <MdOutlineMailOutline />{" "}
                  <span className="ml-4">info@blackrock-uae.com</span>
                </p>
                <p className="my-2 flex items-center text-2l hover:text-wsDark cursor-pointer transition duration-300">
                  <MdAddCall /> <span className="ml-4">+971-52967 5363</span>
                </p>
              </div>
              <div>
                <div className="w-full max-w-4xl mx-auto p-4">
                  <iframe
                    title="Black Rock Trading FZ-LLC"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14382.196672305035!2d55.779354087158225!3d25.68623540000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60a61412b1615%3A0x8382e57f1d189185!2sRakez%20AlHamra%20Industrial%20Zone!5e0!3m2!1sen!2sin!4v1713199641582!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
