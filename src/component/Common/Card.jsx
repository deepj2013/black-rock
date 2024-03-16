import React from "react";

function Card({item}) {
  return (
    <div class=" p-6 h-[300px]   bg-white flex flex-col items-center space-y-2 justify-center  rounded-lg shadow shadow-cool-gray-50 w-[90%] mx-auto  lg:mt-0 lg:w-[45%] ">
      {item.icon}
      <a href="#">
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
          {item?.name}
        </h5>
      </a>
      <p class="mb-3 text-sm font-normal text-cardText">
       {item?.desc}
      </p>
     
    </div>
  );
}

export default Card;
