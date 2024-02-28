import React from "react";
import Button from "../Common/Button";
import { imagesConstant } from "../../utils/ImageConstant";

function HomeJoinUs() {
  return (
    <div className="container mx-auto py-20">
      <p className=" text-2xl lg:text-3xl font-semibold leading-loose text-center">
        Join With Us
      </p>

      <div className="w-full flex flex-wrap container mx-auto mt-10">
        <div className="w-full lg:w-[50%]  flex p-8 flex-col justify-center lg:h-full">
          <img src={imagesConstant.table} />
        </div>

        <div className="w-full lg:w-[50%] p-8  flex flex-col justify-center gap-10 ">
          <form class="">
            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="w-full border-gray-200 rounded-md"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                class="w-full border-gray-200 rounded-md"
                required
              />
            </div>
            <div class="flex items-start mb-5"></div>
            <Button name={"Sign Up"} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomeJoinUs;
