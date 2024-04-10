import React from "react";
import { imagesConstant } from "../../utils/ImageConstant";
import OutlineButton from "../Common/OutlineButton";

function HomeAbout() {
  return (
    <div className="bg-wsLight">
      <div className="  container py-10  mx-auto w-full max-w-screen-xl px-4 md:px-16">
        <div className="w-full   mx-auto bg-white p-10">
          <div className="">
            <h2 className="text-center text-wsDark text-3xl font-semibold">
              Design Your Commercial & Residential Area With Our Incredible
              Interior Design Dubai Services
            </h2>
          </div>
          <div className="flex justify-center">
            <img src={imagesConstant.arrowDesign} alt="" />
          </div>
          <p className="my-5">
            <strong>Interior decoration</strong> is the exceptionally ravishing
            home decor distinction by Musedesign.ae, among all those interior
            decorator companies in Dubai. Our truly remarkable interior
            ornamentation is one mind-blowing manner you can give your existing
            spaces a noteworthy lift up.
          </p>
          <p className="my-5">
            No matter if its commercial or residential space a perfect
            decoration color scheme will brighten up the entire space and add a
            perfect charm to it. To explore our exclusive
            <strong>interior designing Dubai</strong> services keep on reading!
          </p>
          <p>
            We are the leading interior masters in Dubai serving customers with
            all their desired needs. Hiring our professional designer for
            embellishing your interior will surely be the best decision.
          </p>

          <div>
            <div className="flex justify-between my-5 mx-72">
              <OutlineButton name="See Our Projects" />
              <OutlineButton name="Send Enquiry Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
