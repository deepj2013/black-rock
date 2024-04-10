import React from "react";
import { Link } from "react-router-dom";

function ImageCardDes({ navpath, src, title, des }) {
  return (
    <div className=" bg-white p-5 border">
      <Link
        to={navpath}
        className="hover:text-wsDarker transition duration-300"
      >
        <div className="flex justify-center items-center">
          <img src={src} alt="" />
        </div>
        <h2 className="text-2xl text-wsDark font-semibold mt-5 hover:text-wsDarker">
          {title}
        </h2>
        <p className="my-3 text-para">
        {des}
        </p>
      </Link>
    </div>
  );
}

export default ImageCardDes;
