import React from "react";
import { imagesConstant } from "../utils/ImageConstant";
import Footer from "../component/Common/Footer";

function OurServices() {
  const Icon = (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 3.125C20.6735 3.125 16.4442 4.40795 12.8469 6.8116C9.24959 9.21526 6.44581 12.6317 4.79014 16.6288C3.13448 20.6259 2.70128 25.0243 3.54533 29.2676C4.38938 33.5109 6.47277 37.4087 9.53205 40.468C12.5913 43.5272 16.4891 45.6106 20.7324 46.4547C24.9757 47.2987 29.3741 46.8655 33.3712 45.2099C37.3683 43.5542 40.7848 40.7504 43.1884 37.1531C45.5921 33.5558 46.875 29.3265 46.875 25C46.8688 19.2003 44.5621 13.6399 40.4611 9.53889C36.3601 5.43788 30.7997 3.1312 25 3.125ZM33.9172 20.6359L22.9797 31.5734C22.6867 31.8664 22.2893 32.0309 21.875 32.0309C21.4607 32.0309 21.0633 31.8664 20.7703 31.5734L16.0828 26.8859C15.7982 26.5912 15.6407 26.1966 15.6443 25.7869C15.6478 25.3772 15.8122 24.9853 16.1019 24.6956C16.3916 24.4059 16.7835 24.2416 17.1931 24.238C17.6028 24.2344 17.9975 24.3919 18.2922 24.6766L21.875 28.2594L31.7078 18.4266C32.0025 18.1419 32.3972 17.9844 32.8069 17.988C33.2166 17.9916 33.6085 18.1559 33.8982 18.4456C34.1879 18.7353 34.3522 19.1272 34.3558 19.5369C34.3593 19.9466 34.2018 20.3412 33.9172 20.6359Z"
        fill="#D9A247"
      />
    </svg>
  );
  return (
    <div className="container mx-auto pt-32 h-screen ">
      <p className=" text-2xl text-center lg:text-3xl font-semibold leading-loose">
        Our Services
      </p>

      <div className="w-full mt-10 flex flex-wrap container mx-auto">
        <div className="w-full lg:w-[50%] p-8 lg:p-20  flex flex-col justify-center gap-10 ">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 3.125C20.6735 3.125 16.4442 4.40795 12.8469 6.8116C9.24959 9.21526 6.44581 12.6317 4.79014 16.6288C3.13448 20.6259 2.70128 25.0243 3.54533 29.2676C4.38938 33.5109 6.47277 37.4087 9.53205 40.468C12.5913 43.5272 16.4891 45.6106 20.7324 46.4547C24.9757 47.2987 29.3741 46.8655 33.3712 45.2099C37.3683 43.5542 40.7848 40.7504 43.1884 37.1531C45.5921 33.5558 46.875 29.3265 46.875 25C46.8688 19.2003 44.5621 13.6399 40.4611 9.53889C36.3601 5.43788 30.7997 3.1312 25 3.125ZM33.9172 20.6359L22.9797 31.5734C22.6867 31.8664 22.2893 32.0309 21.875 32.0309C21.4607 32.0309 21.0633 31.8664 20.7703 31.5734L16.0828 26.8859C15.7982 26.5912 15.6407 26.1966 15.6443 25.7869C15.6478 25.3772 15.8122 24.9853 16.1019 24.6956C16.3916 24.4059 16.7835 24.2416 17.1931 24.238C17.6028 24.2344 17.9975 24.3919 18.2922 24.6766L21.875 28.2594L31.7078 18.4266C32.0025 18.1419 32.3972 17.9844 32.8069 17.988C33.2166 17.9916 33.6085 18.1559 33.8982 18.4456C34.1879 18.7353 34.3522 19.1272 34.3558 19.5369C34.3593 19.9466 34.2018 20.3412 33.9172 20.6359Z"
              fill="#D9A247"
            />
          </svg>

          <p className=" text-xl lg:text-3xl font-semibold leading-loose">
            Strategic Procurement Services
          </p>

          <p className="font-extralight text-base text-grayShade">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            In publishing and graphic design, Lorem ipsum is a placeholder text
          </p>
        </div>

        <div className="w-full lg:w-[50%]  relative flex p-8 flex-col justify-center lg:h-full">
          <img className="z-40 " src={imagesConstant.services2} />

          <div className="h-full top-0 -right-6 absolute bg-yellowShade w-[50%] rounded-2xl"></div>
        </div>
      </div>
      {/* 2nd card */}
      <div>
        <div className="w-full mt-10 flex flex-wrap container mx-auto">
          <div className="w-full lg:w-[50%]  relative flex p-8 flex-col justify-center lg:h-full">
            <img className="z-40 " src={imagesConstant.services1} />

            <div className="h-full top-0 -right-6 absolute bg-yellowShade w-[50%] rounded-2xl"></div>
          </div>

          <div className="w-full lg:w-[50%] p-8 lg:p-20  flex flex-col justify-center gap-10 ">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 3.125C20.6735 3.125 16.4442 4.40795 12.8469 6.8116C9.24959 9.21526 6.44581 12.6317 4.79014 16.6288C3.13448 20.6259 2.70128 25.0243 3.54533 29.2676C4.38938 33.5109 6.47277 37.4087 9.53205 40.468C12.5913 43.5272 16.4891 45.6106 20.7324 46.4547C24.9757 47.2987 29.3741 46.8655 33.3712 45.2099C37.3683 43.5542 40.7848 40.7504 43.1884 37.1531C45.5921 33.5558 46.875 29.3265 46.875 25C46.8688 19.2003 44.5621 13.6399 40.4611 9.53889C36.3601 5.43788 30.7997 3.1312 25 3.125ZM33.9172 20.6359L22.9797 31.5734C22.6867 31.8664 22.2893 32.0309 21.875 32.0309C21.4607 32.0309 21.0633 31.8664 20.7703 31.5734L16.0828 26.8859C15.7982 26.5912 15.6407 26.1966 15.6443 25.7869C15.6478 25.3772 15.8122 24.9853 16.1019 24.6956C16.3916 24.4059 16.7835 24.2416 17.1931 24.238C17.6028 24.2344 17.9975 24.3919 18.2922 24.6766L21.875 28.2594L31.7078 18.4266C32.0025 18.1419 32.3972 17.9844 32.8069 17.988C33.2166 17.9916 33.6085 18.1559 33.8982 18.4456C34.1879 18.7353 34.3522 19.1272 34.3558 19.5369C34.3593 19.9466 34.2018 20.3412 33.9172 20.6359Z"
                fill="#D9A247"
              />
            </svg>

            <p className=" text-xl lg:text-3xl font-semibold leading-loose">
              Strategic Procurement Services
            </p>

            <p className="font-extralight text-base text-grayShade">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text In publishing and graphic design, Lorem ipsum is a
              placeholder text
            </p>
          </div>
        </div>
      </div>


      <div className="w-full mt-10 flex flex-wrap container mx-auto">
        <div className="w-full lg:w-[50%] p-8 lg:p-20  flex flex-col justify-center gap-10 ">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 3.125C20.6735 3.125 16.4442 4.40795 12.8469 6.8116C9.24959 9.21526 6.44581 12.6317 4.79014 16.6288C3.13448 20.6259 2.70128 25.0243 3.54533 29.2676C4.38938 33.5109 6.47277 37.4087 9.53205 40.468C12.5913 43.5272 16.4891 45.6106 20.7324 46.4547C24.9757 47.2987 29.3741 46.8655 33.3712 45.2099C37.3683 43.5542 40.7848 40.7504 43.1884 37.1531C45.5921 33.5558 46.875 29.3265 46.875 25C46.8688 19.2003 44.5621 13.6399 40.4611 9.53889C36.3601 5.43788 30.7997 3.1312 25 3.125ZM33.9172 20.6359L22.9797 31.5734C22.6867 31.8664 22.2893 32.0309 21.875 32.0309C21.4607 32.0309 21.0633 31.8664 20.7703 31.5734L16.0828 26.8859C15.7982 26.5912 15.6407 26.1966 15.6443 25.7869C15.6478 25.3772 15.8122 24.9853 16.1019 24.6956C16.3916 24.4059 16.7835 24.2416 17.1931 24.238C17.6028 24.2344 17.9975 24.3919 18.2922 24.6766L21.875 28.2594L31.7078 18.4266C32.0025 18.1419 32.3972 17.9844 32.8069 17.988C33.2166 17.9916 33.6085 18.1559 33.8982 18.4456C34.1879 18.7353 34.3522 19.1272 34.3558 19.5369C34.3593 19.9466 34.2018 20.3412 33.9172 20.6359Z"
              fill="#D9A247"
            />
          </svg>

          <p className=" text-xl lg:text-3xl font-semibold leading-loose">
            Strategic Procurement Services
          </p>

          <p className="font-extralight text-base text-grayShade">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            In publishing and graphic design, Lorem ipsum is a placeholder text
          </p>
        </div>

        <div className="w-full lg:w-[50%]  relative flex p-8 flex-col justify-center lg:h-full">
          <img className="z-40 " src={imagesConstant.services3} />

          <div className="h-full top-0 -right-6 absolute bg-yellowShade w-[50%] rounded-2xl"></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default OurServices;
