import React from "react";

const FillBlackButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick || (() => {})} // Proper fallback for onClick
      className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white py-2 rounded-none min-w-[200px] max-w-[400px] px-2 focus:outline-none focus:ring-0 transition duration-500"
    >
      {name}
    </button>
  );
};

export default FillBlackButton;
