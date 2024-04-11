import React from "react";
import { imagesConstant } from "../../utils/ImageConstant";
import OutlineButton from "../Common/OutlineButton";
import { Link } from "react-router-dom";

import ImageCard from "../Common/ImageCard";
import ContactButton from "../Common/ContactButton";
import GetInTouch from "../Common/GetInTouch";

import LightBoxGallary from "../Common/LightBoxGallary";
import ImageCardDes from "../Common/ImageCardDes";
import OverlayBanner from "../Common/OverlayBanner";
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import FillBlackButton from "../Common/FillBlackButton";

function HomeService1() {
  return (
    <div className="bg-wsLight">
      <div className="  container py-5  mx-auto w-full max-w-screen-xl px-4 md:px-16">
        <div className="grid lg:grid-cols-2">
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
        </div>
        <div className="my-10">
          <ContactButton />
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <ImageCard
            title="Beauty Salon Interior Design"
            navpath="/"
            src={imagesConstant.int1}
          />
          <ImageCard
            title="Apartment Interior Design"
            navpath="/"
            src={imagesConstant.int2}
          />
          <ImageCard
            title="Landscape Design"
            navpath="/"
            src={imagesConstant.int3}
          />

          <ImageCard
            title="Barber Shop Interior Design"
            navpath="/"
            src={imagesConstant.int4}
          />
          <ImageCard
            title="Hotel Interior Design"
            navpath="/"
            src={imagesConstant.int5}
          />
          <ImageCard
            title="Curtains In Dubai"
            navpath="/"
            src={imagesConstant.int6}
          />

          <ImageCard
            title="Office interior Design"
            navpath="/"
            src={imagesConstant.int7}
          />
          <ImageCard
            title="Restaurant Interior Design"
            navpath="/"
            src={imagesConstant.int8}
          />
          <ImageCard
            title="Renovation Company"
            navpath="/"
            src={imagesConstant.int9}
          />
        </div>
        <div>
          <GetInTouch />
        </div>
      </div>
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
                Choosing The Right Colours In Your Space!(A Blending Color Theme
                Is Essential For Attractive Interior)
              </h2>
              <p className="my-5">
                Colour plays a huge role in creating a mood and ambience, the
                right decoration
              </p>
              <p className="my-5">
                color scheme can set the tone of your interior space. To give
                you a few basic interior designing ideas you must know you can’t
                always go with only dark colors or light colours.
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
                residential and commercial projects. We offer complete interior
                solutions. We deliver all kinds of interior & Exterior Design
                services and exterior decoration work at a highly competitive
                price.
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
      <div className="bg-white py-10">
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
      </div>
      <div>
        <GetInTouch />
      </div>
      <div className="bg-wsLight">
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
        </div>
      </div>
      <div>
        <OverlayBanner title="TRUST THE EXPERTS FOR ALL YOUR BUILDING NEEDS" />
      </div>
      <div className="bg-wsLight  mt-10">
        <div className="container bg-white py-10  mx-auto w-full max-w-screen-xl px-4 md:px-16">
          <div className="">
            <h2 className="text-center text-wsDark text-3xl font-semibold capitalize">
              Get 100% Quality Interior Fitting & Furnishing Service UAE
            </h2>
          </div>
          <div className="flex justify-center">
            <img width="300px" src={imagesConstant.arrowDesign} alt="" />
          </div>
          <div className=" my-4">
            <div>
              <p className="my-5">
                We at Muse design will help you to create the perfect ambience
                for your house or office space with our expertise. Our
                specialised Modern Interior Design Dubai is meant to please you
                in those wonderful ways that you probably haven’t experienced to
                date. Check out the services!
              </p>
              <ul className="my-5 max-w-3xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Proper Planning on a Project.</li>
                <li>Professional Assessment and Feasibility Study.</li>
                <li>Experienced, Professional, and Well Qualified Liaison.</li>
                <li>Better Utilization of Resources to Save Time and Money.</li>
                <li>Quality, Dynamic and Innovative Designs</li>
                <li>
                  Expectations Meet Reality with WOW Factor. Ravishing
                  Aesthetic!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-wsLight  mt-10">
        <div className="container bg-wsLight py-10  mx-auto w-full max-w-screen-xl px-4 md:px-16">
          <div className="">
            <h2 className="text-center text-grayShade text-4xl font-semibold uppercase">
              Our Services
            </h2>
          </div>
          <div className="flex justify-center">
            <img width="300px" src={imagesConstant.arrowDesign} alt="" />
          </div>
          <div className="grid lg:grid-cols-2 gap-5 my-4">
            <div className="bg-theme p-10">
              <h2 className="text-white text-4xl font-bold">
                Our Interior Design Team In UAE
              </h2>
              <p className="my-5 text-white">
                Our team is engaged mainly in Dubai, but we also span to
                Sharjah, UAE, RAK, and many other states to provide our interior
                design Dubai Service. We believe in honesty and open
                communication. Each team member focuses on integrity and hard
                work; this is the core value behind our success.
              </p>
              <div className="grid grid-cols-2 text-white">
                <div>
                  <h6>Phone No</h6>
                  <p>+9876544435</p>
                </div>
                <div>
                  <h6>Email ID</h6>
                  <p>info@sdfghj.com</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl my-3 font-bold">Contact us</h2>
              <form action="">
              <div className="grid grid-cols-2 gap-4 text-gray-500 ">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"  />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Subject"/>
              </div>
              <div className="grid grid-cols-1 gap-4 my-4 text-gray-500">
                <textarea placeholder="Message" rows="4" className="p-4"></textarea>
                
              </div>
              <FillBlackButton name="Submit"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeService1;
