import React from "react";
import { imagesConstant } from "../utils/ImageConstant";
import { FaCircle } from "react-icons/fa6";
import Footer from "../component/Common/Footer";

function About() {

  const VisionArray=[
    {
      title:`Integrity: We conduct business with honesty, transparency, and 
      ethical standards`
    },
    {
      title:`Customer Focus: We prioritize understanding and exceeding our 
      customers' needs and expectations.`
    },
    {
      title:`Innovation: We continuously seek creative solutions to drive 
      efficiency and growth.`
    },
    {
      title:`Collaboration: We value teamwork and actively collaborate with
      partners, suppliers, and customers.`
    },
    {
      title:`Excellence: We strive for excellence in all aspects of our operations,
      aiming for continuous improvement.`
    }
  ]
  return (
    <div>
      <img className="mt-18 w-full" src={imagesConstant.About} />

      <div className="container mx-auto py-20">
        <p className=" text-2xl lg:text-3xl font-semibold leading-loose">
          About Us
        </p>

        <p className="font-extralight text-base text-cardText leading-loose mt-10">
          Black Rock Trading FZ LLC has steadily grown from a local trading firm
          to a reputable player in the global market. Our journey has been
          characterized by dedication, innovation, and a commitment to
          excellence.
        </p>

        <p className="font-normal text-base text-cardText leading-loose mt-10">
          Import and export of a wide range of goods including, household
          products, textiles, and more.Procurement services for businesses
          seeking reliable suppliers and cost-effective solutions.Logistics and
          supply chain management services to optimize distribution and delivery
          processes
        </p>
      </div>

      <div className="w-full flex flex-wrap container mx-auto">
      

        <div className="w-full lg:w-[50%] space-y-4  flex flex-col justify-start ">
          <p className=" text-xl lg:text-3xl font-semibold leading-loose">
          Our Vision and Mission
          </p>

          <p className="font-normal text-base text-cardText leading-loose ">
          Extensive global network of suppliers and partners enabling us 
to offer a diverse range of products at competitive prices.
        </p>

      <p className="text-black font-semibold text-xl">Vision</p>

      <p className="font-normal text-base text-cardText leading-loose ">
          Extensive global network of suppliers and partners enabling us 
to offer a diverse range of products at competitive prices.
        </p>

      <ul>
  {
    VisionArray.map((ele,ind)=>{
        return(
          <div className="flex mt-3 ">
              <FaCircle className="text-[10px] mr-3 mt-2" />
            <li className="text-base flex items-start  leading-loose  text-cardText">
              {ele.title}
            </li>
            </div>
        )
    })
  }
</ul>  


<p className="text-black font-semibold text-xl mt-16">Mission</p>

      <p className="font-normal text-base text-cardText leading-loose ">
          Extensive global network of suppliers and partners enabling us 
to offer a diverse range of products at competitive prices.
        </p>
        </div>

        <div className="w-full lg:w-[50%]  flex px-10 flex-col justify-center lg:h-full">
          <img src={imagesConstant.table} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
