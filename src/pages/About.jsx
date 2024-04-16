import React from "react";
import { imagesConstant } from "../utils/ImageConstant";
import { FaCircle } from "react-icons/fa6";
import Footer from "../component/Common/Footer";
import OverlayBannerVideo from "../component/Common/OverlayBannerVideo";
import OutlineButton from "../component/Common/OutlineButton";
import { Link } from "react-router-dom";
import ContactButton from "../component/Common/ContactButton";
import GetInTouch from "../component/Common/GetInTouch";
import LightBoxGallary from "../component/Common/LightBoxGallary";
import ImageCardDes from "../component/Common/ImageCardDes";

function About() {
  const VisionArray = [
    {
      title: `Integrity: We conduct business with honesty, transparency, and 
      ethical standards`,
    },
    {
      title: `Customer Focus: We prioritize understanding and exceeding our 
      customers' needs and expectations.`,
    },
    {
      title: `Innovation: We continuously seek creative solutions to drive 
      efficiency and growth.`,
    },
    {
      title: `Collaboration: We value teamwork and actively collaborate with
      partners, suppliers, and customers.`,
    },
    {
      title: `Excellence: We strive for excellence in all aspects of our operations,
      aiming for continuous improvement.`,
    },
  ];
  return (
    <div>
      <div className="container mx-auto py-20  w-full max-w-screen-xl px-4 md:px-16">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex justify-center items-center p-5">
            <div>
              <p className=" text-2xl lg:text-3xl font-semibold leading-loose text-wsDark">
                About Us
              </p>

              <p className="my-5">
                Founded in<strong> 2024, Black Rock Trading FZ LLC </strong>has
                evolved from a local trading company into a distinguished global
                market presence. Our growth trajectory is marked by relentless
                dedication, groundbreaking innovation, and an unwavering
                commitment to excellence. As we continue to expand our horizons,
                our focus remains on delivering superior value and building
                lasting relationships with our partners worldwide.
              </p>

              <p className="my-5">
                At <strong>Black Rock Trading FZ LLC </strong>, we pride
                ourselves on our ability to adapt and thrive in the dynamic
                global marketplace, consistently pushing the boundaries of what
                is possible in international trade. Join us on our journey as we
                set new standards in the industry and contribute to global
                economic growth.
              </p>
            </div>
          </div>
          <div>
            <OverlayBannerVideo
              imageUrl="https://musedesign.ae/wp-content/uploads/2022/03/commercail.jpeg"
              videoId="tDoHXSgyn_A?list=TLGGa8QJbjCeytkwNDA0MjAyNA"
            />
          </div>
        </div>
      </div>
      <div className="container bg-wsLight mx-auto py-10  w-full max-w-screen-xl px-4 md:px-16">
        

        
          <div className="">
          <h2 className="text-center text-wsDark text-3xl font-semibold uppercase">
            Our Mission | Vission
          </h2>
        </div>
          <div>
            <p className=" text-2xl lg:text-3xl font-semibold leading-loose text-wsDark">
              Mission
            </p>

            <p className="my-5">
            To provide superior trading services globally, specializing in household items, textiles, modular kitchens, and office accessories. We aim to serve with integrity, innovation, and excellence..
            </p>
          </div>
          
       
        <div>
            <p className=" text-2xl lg:text-3xl font-semibold leading-loose text-wsDark">
              Vission
            </p>

            <p className="my-5">
            To be a globally recognized leader in general trading, renowned for our innovative solutions, integrity, and exceptional service.
            </p>
          </div>
        {/* <div className="grid lg:grid-cols-3">
          <div className=" bg-white p-10 border">
            <div className="flex justify-center items-center">
              <img width="500px" src={imagesConstant.int3} alt="" />
            </div>
            <h2 className="text-2xl text-wsDark font-semibold mt-5 hover:text-wsDarker">
              <Link to="/" className="hover:text-wsDarker">
                Villa Design
              </Link>
            </h2>
          </div>
          <div className=" bg-white p-10 border">
            <div className="flex justify-center items-center">
              <img src={imagesConstant.int1} alt="" />
            </div>
            <h2 className="text-2xl text-wsDark font-semibold mt-5 hover:text-wsDarker">
              <Link to="/" className="hover:text-wsDarker">
                Penthouse Design
              </Link>
            </h2>
          </div>
          <div className=" bg-white p-10 border">
            <div className="flex justify-center items-center">
              <img src={imagesConstant.int7} alt="" />
            </div>
            <h2 className="text-2xl text-wsDark font-semibold mt-5 hover:text-wsDarker">
              <Link to="/" className="hover:text-wsDarker">
                Hotel Design
              </Link>
            </h2>
          </div>
        </div>
        <div className="my-10">
          <ContactButton />
        </div>
      </div>
      <div className="bg-wsLight ">
        <div className="container bg-white  mx-auto py-10  w-full max-w-screen-xl px-4 md:px-16 ">
          <div className="">
            <h2 className="text-center text-wsDark text-3xl font-semibold uppercase">
              Our Incredible Interior Design Services
            </h2>
          </div>
          <div className="flex justify-center">
            <img width="300px" src={imagesConstant.arrowDesign} alt="" />
          </div>
          <p>
            Interior designing is one of the most crucial elements for making
            your entire home look so beautiful and amazing. Whenever someone
            visits your home, the first thing they interact with is the interior
            of your home. So, by hiring our qualified staff/team of
            professionals, you can easily give a perfect and modern look to your
            home.Our company achieves the level of excellence and breaks the
            records for creating the remarkable masterpiece of interior work. We
            offer various services, like:
          </p>
        </div>*/}
        <div className="bg-white py-10">
          <div className="container py-5  mx-auto w-full max-w-screen-xl px-4 md:px-16">
            <div className="">
              <h2 className="text-center text-grayShade text-4xl font-semibold uppercase">
                Luxury Furniture Without Compromise
              </h2>
            </div>
            <div className="flex justify-center">
              <img width="300px" src={imagesConstant.arrowDesign} alt="" />
            </div>
            <div className="grid lg:grid-cols-2 gap-5 my-4">
              <div>
                <h2 className="text-center text-wsDark text-3xl font-semibold capitalize">
                  Choosing The Right Colours In Your Space!(A Blending Color
                  Theme Is Essential For Attractive Interior)
                </h2>
                <p className="my-5">
                  Colour plays a huge role in creating a mood and ambience, the
                  right decoration
                </p>
                <p className="my-5">
                  color scheme can set the tone of your interior space. To give
                  you a few basic interior designing ideas you must know you
                  can’t always go with only dark colors or light colours.
                </p>
                <p className="my-5">
                  Choosing blending colors will make a statement and let your
                  interior stand out! Apart from this, getting our Interior
                  decorationservices from us will never be a burden on you. Step
                  out to get the most beautiful color scheme selection for your
                  interior!
                </p>
              </div>
              <div>
                <img width="500px" src={imagesConstant.int10} alt="" />
              </div>
              <div className="order-last">
                <h2 className="text-center text-wsDark text-3xl font-semibold capitalize">
                  Get Exclusive Interior Design Dubai Services From The
                  Top-Leading Firm
                </h2>
                <p className="my-5">
                  We provide the best Interior services for creative space
                  planning, detailed drawings, 3D rendering, and so on for both
                  residential and commercial projects. We offer complete
                  interior solutions. We deliver all kinds of interior &
                  Exterior Design services and exterior decoration work at a
                  highly competitive price.
                </p>
                <p className="my-5">
                  Luxury Interior Design is meant to be your level best styling
                  and also the appropriately suitable solution for all of those
                  modern home and commercial interior needs. We always keep our
                  customers our priority and serve them with the best possible
                  Interior services.
                </p>
              </div>
              <div>
                <img width="500px" src={imagesConstant.int11} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white py-10">
          <div className="container py-5  mx-auto w-full max-w-screen-xl px-4 md:px-16">
            <div className="">
              <h2 className="text-center text-grayShade text-4xl font-semibold uppercase">
                MUSE DESIGN PORTFOLIO
              </h2>
            </div>
            <div className="flex justify-center">
              <img width="300px" src={imagesConstant.arrowDesign} alt="" />
            </div>

            <LightBoxGallary />

            <div className="flex justify-center mt-10">
              <button className="bg-slate-900 hover:bg-white  hover:text-wsDark border-2 hover:border-wsDark py-2 rounded-none  min-w-[200px] max-w-[400px] px-2 focus:outline-none focus:ring-0 text-white transition duration-500">
                More Projects
              </button>
            </div>
          </div>
        </div> */}
        {/* <div>
          <GetInTouch />
        </div> */}
        {/* <div className="bg-wsLight">
          <div className="  container py-10  mx-auto w-full max-w-screen-xl px-4 md:px-16">
            <div className=" bg-white ">
              <div className="grid lg:grid-cols-3 gap-3">
                <ImageCardDes
                  title="Office interior Design"
                  navpath="/"
                  src={imagesConstant.int7}
                  des="We have been serving interior services in Downtown Dubai for many years from modern villa designing to classy traditional house designs."
                />
                <ImageCardDes
                  title="Dubai Marina"
                  navpath="/"
                  src={imagesConstant.int8}
                  des="Another state of UAE, Dubai Marina where we have served many of our esteemed customers for their home, office, apartment, penthouse or commercial interior services."
                />
                <ImageCardDes
                  title="Palm Jumeirah"
                  navpath="/"
                  src={imagesConstant.int9}
                  des="We have embellished a number of indoor & outdoor spaces in Palm Jumeirah with our top-rated interior designing services."
                />
              </div>
            </div>
/         </div>
        </div> */}
      </div> 

      <Footer />
    </div>
  );
}

export default About;
