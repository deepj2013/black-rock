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
                Features That We are Providing in Our Interior Designing
              </h2>
            </div>
           
            <p className="my-5">
              <strong>Muse Design</strong> is a leading interior company in
              Dubai that provides a massive range of designing services for
              commercial, residential, institutional, and other architectural
              projects. We have a team of highly professionals{" "}
              <strong>Interior Design Dubai</strong> service, decorators,
              fabricators, and executors that deliver a high-quality project and
              support each step.
            </p>
            <p className="my-5">
              Our company achieves a level of excellence for creating
              masterpieces of interior works. The work of our professionals
              speaks for itself. It can be tricky to create a cohesive look that
              represents your style. That’s where our Interior decorating
              schemes come in.
            </p>
          </div>
          <div className=" bg-white p-10">
          <OverlayBannerVideo imageUrl="https://musedesign.ae/wp-content/uploads/2022/03/commercail.jpeg" videoId="tDoHXSgyn_A?list=TLGGa8QJbjCeytkwNDA0MjAyNA" />
           
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSubAbout;
