import React from "react";
import { imagesConstant } from "../utils/ImageConstant";
import Button from "../component/Common/Button";
import Footer from "../component/Common/Footer";
function Contact() {
  return (
    <div className="w-screen mx-auto pt-32 h-screen ">
      <p className=" text-2xl text-center lg:text-3xl font-semibold leading-loose">
        Contact us
      </p>

      <div
        className="h-screen w-screen mt-10"
        style={{
          background: `url(${imagesConstant.contact})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute h-full w-full bg-black/50">
          <div className="w-full lg:w-[70vw] mx-auto">
            <p className="text-2xl text-white font-semibold lg:text-3xl p-10">
              Send us a message
            </p>

            <div className=" flex  justify-between items-center text-white">
              <div className="w-[40%] h-72">
                <input
                  placeholder="Your Name"
                  className="bg-white/30 border h-12 border-white/40 px-4 p-2 py-3 rounded-md w-full text-white"
                />
                <input
                  placeholder="Your Name"
                  className="bg-white/30 mt-4 border h-12 border-white/40 px-4 p-2 py-3 rounded-md w-full text-white"
                />

                <textarea
                  placeholder="Message"
                  className="bg-white/30 border h-36 rounded-md border-white/40 px-4 p-2 w-[100%] mt-5"
                />
              </div>

              <textarea
                placeholder="Message"
                className="bg-white/30 border h-72 rounded-md border-white/40 px-4 p-2 w-[40%] "
              />
            </div>
            <div className=" mt-10">
              <Button name={"Send a message"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
