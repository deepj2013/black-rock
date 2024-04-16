import React from "react";
import { imagesConstant } from "../../utils/ImageConstant";
import OutlineButton from "../Common/OutlineButton";
import OverlayBannerVideo from "../Common/OverlayBannerVideo";

function HomeSubAbout() {
  return (
    <div className="bg-wsLight">
      <div className="  container py-5  mx-auto w-full max-w-screen-xl px-4 md:px-16">
        <div className="grid lg:grid-cols-2">
          <div className=" bg-white p-10">
            <div className="">
              <h2 className="text-center text-wsDark text-3xl font-semibold">
              Introduction
              </h2>
            </div>

            <p className="my-5">
              Welcome to <strong>Black Rock Trading FZ LLC </strong>, your global partner in
              general trading. Based in RAS AL KHAIMA, <strong>UAE</strong>, we specialize in the
              import and export of household items, textiles, modular kitchens,
              and office accessories. Our commitment to innovation and quality
              drives us to serve businesses across the globe, helping them
              achieve operational excellence.
            </p>
          
          </div>
          <div className=" bg-white p-10">
            <OverlayBannerVideo
              imageUrl="https://musedesign.ae/wp-content/uploads/2022/03/commercail.jpeg"
              videoId="tDoHXSgyn_A?list=TLGGa8QJbjCeytkwNDA0MjAyNA"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSubAbout;
