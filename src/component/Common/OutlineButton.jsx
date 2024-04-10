import React from "react";


const OutlineButton = ({ name, to}) => {

  return (
    <button  className="bg-transparent hover:bg-wsDark  hover:text-white border border-slate-700 py-2 rounded-none  min-w-[150px] max-w-[200px] px-2 focus:outline-none focus:ring-0 text-slate-700 transition duration-500">
      {name ? name : "Explore"}
    </button>
  );
};

export default OutlineButton;
