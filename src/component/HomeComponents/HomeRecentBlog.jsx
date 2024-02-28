import React from "react";
import { imagesConstant } from "../../utils/ImageConstant";

function HomeRecentBlog() {
  return (
    <div className="w-screen  bg-[#F4F4F4]  py-16">
      <div className="container mx-auto">
        <p className=" text-2xl lg:text-3xl font-semibold leading-loose text-center">
        Recent Blog
        </p>

        <p className=" pb-3  font-medium text-xl cursor-pointer leading-loose text-end">
          See All
        </p>

        <div className="flex justify-between flex-wrap">
          {[1, 1, 1].map((ele, ind) => {
            return (
              <div className=" w-[90%] mx-auto lg:w-[30%]  rounded-2xl mt-10 lg:mt-0">
                <img src={imagesConstant.table} />
                <div className="flex items-start flex-col justify-between px-3">
                  <p className=" font-bold py-4 leading-5 text-lg">First Time Home Owner Ideas</p>
                <p className="leading-snug">by <strong>Nana</strong>  Ama on <strong> Nov 18th, 2022 </strong></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeRecentBlog;
