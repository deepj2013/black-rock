import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../App.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function HomeTestimonials() {
  return (
    <div className="w-screen bg-white">
    <div className="container container-box mx-auto h-screen py-20 bg-white">
      <p className=" text-2xl lg:text-3xl font-semibold leading-loose text-center">
        Testimonials
      </p>
      <Swiper
        cssMode={true}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[70%] mx-auto flex flex-col items-center">
            <p>
              ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam.
              Mauris accumsan felis fermentum euismod egestas. Mauris ante
              augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel
              nibh tellus. Pellentesque in risus non dui venenatis sollicitudin
              sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan
              non. Pellentesque ma’’
            </p>
            {/* <div className="h-16 w-16 rounded-full border mt-10"> */}
            <img className='max-h-16 max-w-16 mt-7 rounded-full' src={'https://files.123freevectors.com/wp-content/original/503818-beautiful-indian-girl-image.jpg'}/>
            {/* </div> */}

            <div className="font-semibold mt-4 text-xl">
              Michelle Anna
              <p className="text-sm  ">CEO, Co-Founder, XYZ Inc.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <button className="arrow-left arrow z-50 w-20 flex justify-center items-center h-20 bg-gray-50 rounded-full">
      <FaChevronLeft />
      </button>
        <button className="arrow-right arrow z-50 w-20 flex items-center justify-center h-20 bg-gray-50 rounded-full">
        <FaChevronRight />
        </button>
    </div>
    </div>
  );
}
