import React from "react";

function Card({item}) {
  return (
    
    <div className=" bg-white p-5 border">
    <div className="flex justify-center items-center">
      <img src={imagesConstant.int8} alt="" />
    </div>
    <h2 className="text-2xl text-wsDark font-semibold mt-5 hover:text-wsDarker">
      <Link to="/" className="hover:text-wsDarker transition duration-300">
        Penthouse Design
      </Link>
    </h2>
  </div>
  );
}

export default Card;
