import React from "react";
import OutlineButton from "./OutlineButton";

function OverlayBanner({ btnName, title }) {
  return (
    <div className="relative">
      {/* Background */}
      <div
        className="bg-cover bg-center h-64 md:h-96"
        style={{
          backgroundImage:
            "url('https://musedesign.ae/wp-content/uploads/2021/06/beauty-salon.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center md:px-16 px-4">
          <h1 className="text-white text-center text-4xl md:text-5xl lg:text-6xl font-bold">
            {title}
          </h1>
          <div className="my-10">
            <button className="bg-white hover:bg-wsDark  hover:text-white border border-slate-700 py-2 rounded-none  min-w-[150px] max-w-[200px] px-2 focus:outline-none focus:ring-0 text-slate-700 transition duration-500">
              {btnName ? btnName : "Send Enquiry Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverlayBanner;
