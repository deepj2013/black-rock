import React, { useEffect } from "react";
import { imagesConstant } from "../utils/ImageConstant";
import { NavLink, Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
function Navbar() {
  useEffect(() => {
    Aos.init({
      duration: 0,
      delay: 0, // Animation duration (in milliseconds)
      //   once: , // Whether animation should happen only once
    });
  }, []);

  const route = [
    {
      name: "Home",
      icon: "",
    },
  ];

  return (
    <nav className="bg-white shadow-xl  fixed w-full z-20 top-0 start-0 -b -gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            className="h-10"
            src={imagesConstant.Logo}
            alt="Black Rock Logo"
          />

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            Black Rock
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blueShade rounded-full px-10"
          >
            Sign Up
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:-0 ">
            <li>
              <p className="block py-2 px-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                <NavLink
                  to={"/"}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-blueShade border-b-4 border-blueShade pb-3 px-5 rounded"
                      : "text-black";
                  }}
                >
                  Home
                </NavLink>
              </p>
            </li>

            <li>
              <p className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                <NavLink
                  to={"/about"}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-blueShade border-b-4 border-blueShade pb-3 px-5 rounded"
                      : "text-black";
                  }}
                >
                  About Us
                </NavLink>
              </p>
            </li>
            <li>
              <p className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                <NavLink
                  to={"/services"}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-blueShade border-b-4 border-blueShade pb-3 px-5 rounded"
                      : "text-black";
                  }}
                >
                  Services
                </NavLink>
              </p>
            </li>

            <li>
              <p className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-blueShade border-b-4 border-blueShade pb-3 px-5 rounded"
                      : "text-black";
                  }}
                >
                  Contact us
                </NavLink>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
