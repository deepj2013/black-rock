import React from "react";

const FillBlackButton = ({name, onClick}) => {
  return (
    <button onClick={onClick? onClick: "#"} className="bg-slate-900 hover:bg-white  hover:text-wsDark border-2 hover:border-wsDark py-2 rounded-none  min-w-[200px] max-w-[400px] px-2 focus:outline-none focus:ring-0 text-white transition duration-500">
      {name}
    </button>
  );
};

export default FillBlackButton;
