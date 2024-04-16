import React from "react";
import Pdf from "../assets/brpdf.pdf"
import Footer from "../component/Common/Footer";


function Portfolio(){
return    (
    <div className="flex flex-col h-screen">
    
    <div className="flex-grow ">
      <iframe     
        src={Pdf}
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        className="w-full h-full"
        title="Portfolio PDF">
      </iframe>
    </div>
   
  </div>
)

}
export default Portfolio;
