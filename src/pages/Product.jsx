import React, { useState } from "react";
import Button from "../component/Common/Button";
import { imagesConstant } from "../utils/ImageConstant";
import Footer from "../component/Common/Footer";
import { useNavigate } from "react-router";

function Product() {

  const [activeIndex,setActiveIndex]=useState(0)
  const navigate=useNavigate()
  const product = [
    {
      name: "All Products",
    },
    {
      name: "Sofa",
    },
    {
      name: "Chair",
    },
    {
      name: "Office Table",
    },
    {
      name: "Dining Table",
    },
    {
      name: "Bean Bag",
    },
    {
      name: "Table Lamps",
    },
    {
      name: "Desk Lamps",
    },
    {
      name: "Floor Lamps",
    },
  ];


  const data=[
  
    {
      name:'Chair',
      img:imagesConstant?.Chair
    },
    {
      name:'Office Table',
      img:imagesConstant?.chairTable
    },
    {
      name:'Furniture Set',
      img:imagesConstant?.table1
    },
    {
      name:'Sofa',
      img:imagesConstant?.Chair
    },
    {
      name:'Office Table',
      img:imagesConstant?.chairTable
    },
    {
      name:'Sofa',
      img:imagesConstant?.table1
    }

  ]
  const [productFilter, setProductFilter] = useState(product);
  return (
    <div className="container mx-auto pt-32 h-screen overflow-hidden">
      <p className=" text40 text-center  font-semibold leading-loose">
        Our Products
      </p>

      <div className="mt-10  flex">
        {productFilter.map((ele, ind) => {
          return (
            <button
            onClick={()=>setActiveIndex(ind)}
              key={ind}
              className={`${
                activeIndex==ind ? "bg-theme text-white " : "bg-white text-black "
              } rounded-full px-6 border border-gray-200 mr-2 py-2.5`}
            >
              {ele.name}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between pb-40 flex-wrap my-10 h-[80vh] overflow-scroll">
        {data.map((ele, ind) => {
          return (
            <div onClick={()=>navigate('/ProductCategory')}  className=" w-[90%] mx-auto lg:w-[30%] shadow bg-white rounded-2xl mt-16">
              <img className="w-full" src={ele.img} />
              <div className="flex items-center justify-between px-3">
                <p className="text-2xl font-bold py-4">{ele?.name}</p>
                <svg
                  width="172"
                  height="26"
                  viewBox="0 0 172 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2003_24)">
                    <path
                      d="M26.3321 9.97349C26.1619 9.44702 25.695 9.0731 25.1425 9.02331L17.6382 8.34191L14.6708 1.3964C14.452 0.887383 13.9537 0.557892 13.4 0.557892C12.8464 0.557892 12.3481 0.887383 12.1293 1.39759L9.16187 8.34191L1.65637 9.02331C1.1049 9.07429 0.639132 9.44702 0.46794 9.97349C0.296747 10.5 0.454847 11.0774 0.872018 11.4414L6.54439 16.4161L4.87174 23.7842C4.74934 24.3259 4.95962 24.8859 5.40912 25.2108C5.65073 25.3854 5.93341 25.4743 6.21847 25.4743C6.46425 25.4743 6.70804 25.408 6.92685 25.2771L13.4 21.4083L19.8708 25.2771C20.3443 25.562 20.9412 25.536 21.3898 25.2108C21.8395 24.8849 22.0495 24.3247 21.9271 23.7842L20.2545 16.4161L25.9269 11.4424C26.344 11.0774 26.5033 10.501 26.3321 9.97349Z"
                      fill="#F1BC05"
                    />
                  </g>
                  <g clip-path="url(#clip1_2003_24)">
                    <path
                      d="M62.732 9.97349C62.5618 9.44702 62.0949 9.0731 61.5424 9.02331L54.0381 8.34191L51.0707 1.3964C50.8519 0.887383 50.3536 0.557892 49.7999 0.557892C49.2463 0.557892 48.748 0.887383 48.5292 1.39759L45.5618 8.34191L38.0563 9.02331C37.5048 9.07429 37.039 9.44702 36.8678 9.97349C36.6966 10.5 36.8547 11.0774 37.2719 11.4414L42.9443 16.4161L41.2716 23.7842C41.1492 24.3259 41.3595 24.8859 41.809 25.2108C42.0506 25.3854 42.3333 25.4743 42.6184 25.4743C42.8641 25.4743 43.1079 25.408 43.3267 25.2771L49.7999 21.4083L56.2707 25.2771C56.7442 25.562 57.3411 25.536 57.7897 25.2108C58.2394 24.8849 58.4494 24.3247 58.327 23.7842L56.6544 16.4161L62.3268 11.4424C62.7439 11.0774 62.9032 10.501 62.732 9.97349Z"
                      fill="#F1BC05"
                    />
                  </g>
                  <g clip-path="url(#clip2_2003_24)">
                    <path
                      d="M99.1319 9.97349C98.9617 9.44702 98.4948 9.0731 97.9423 9.02331L90.438 8.34191L87.4706 1.3964C87.2518 0.887383 86.7535 0.557892 86.1998 0.557892C85.6462 0.557892 85.1479 0.887383 84.9291 1.39759L81.9617 8.34191L74.4562 9.02331C73.9047 9.07429 73.4389 9.44702 73.2677 9.97349C73.0966 10.5 73.2547 11.0774 73.6718 11.4414L79.3442 16.4161L77.6715 23.7842C77.5491 24.3259 77.7594 24.8859 78.2089 25.2108C78.4505 25.3854 78.7332 25.4743 79.0183 25.4743C79.2641 25.4743 79.5078 25.408 79.7266 25.2771L86.1998 21.4083L92.6706 25.2771C93.1442 25.562 93.741 25.536 94.1896 25.2108C94.6393 24.8849 94.8493 24.3247 94.7269 23.7842L93.0543 16.4161L98.7267 11.4424C99.1438 11.0774 99.3031 10.501 99.1319 9.97349Z"
                      fill="#F1BC05"
                    />
                  </g>
                  <g clip-path="url(#clip3_2003_24)">
                    <path
                      d="M135.532 9.97349C135.362 9.44702 134.895 9.0731 134.343 9.02331L126.838 8.34191L123.871 1.3964C123.652 0.887383 123.154 0.557892 122.6 0.557892C122.047 0.557892 121.548 0.887383 121.329 1.39759L118.362 8.34191L110.857 9.02331C110.305 9.07429 109.839 9.44702 109.668 9.97349C109.497 10.5 109.655 11.0774 110.072 11.4414L115.745 16.4161L114.072 23.7842C113.95 24.3259 114.16 24.8859 114.609 25.2108C114.851 25.3854 115.134 25.4743 115.419 25.4743C115.664 25.4743 115.908 25.408 116.127 25.2771L122.6 21.4083L129.071 25.2771C129.545 25.562 130.141 25.536 130.59 25.2108C131.04 24.8849 131.25 24.3247 131.127 23.7842L129.455 16.4161L135.127 11.4424C135.544 11.0774 135.704 10.501 135.532 9.97349Z"
                      fill="#F1BC05"
                    />
                  </g>
                  <g clip-path="url(#clip4_2003_24)">
                    <path
                      d="M171.932 9.97349C171.762 9.44702 171.295 9.0731 170.743 9.02331L163.238 8.34191L160.271 1.3964C160.052 0.887383 159.554 0.557892 159 0.557892C158.446 0.557892 157.948 0.887383 157.729 1.39759L154.762 8.34191L147.256 9.02331C146.705 9.07429 146.239 9.44702 146.068 9.97349C145.897 10.5 146.055 11.0774 146.472 11.4414L152.144 16.4161L150.472 23.7842C150.349 24.3259 150.56 24.8859 151.009 25.2108C151.251 25.3854 151.534 25.4743 151.819 25.4743C152.064 25.4743 152.308 25.408 152.527 25.2771L159 21.4083L165.471 25.2771C165.944 25.562 166.541 25.536 166.99 25.2108C167.44 24.8849 167.65 24.3247 167.527 23.7842L165.855 16.4161L171.527 11.4424C171.944 11.0774 172.103 10.501 171.932 9.97349Z"
                      fill="#DDDDDD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2003_24">
                      <rect
                        width="26"
                        height="26"
                        fill="white"
                        transform="translate(0.399902)"
                      />
                    </clipPath>
                    <clipPath id="clip1_2003_24">
                      <rect
                        width="26"
                        height="26"
                        fill="white"
                        transform="translate(36.7998)"
                      />
                    </clipPath>
                    <clipPath id="clip2_2003_24">
                      <rect
                        width="26"
                        height="26"
                        fill="white"
                        transform="translate(73.1997)"
                      />
                    </clipPath>
                    <clipPath id="clip3_2003_24">
                      <rect
                        width="26"
                        height="26"
                        fill="white"
                        transform="translate(109.6)"
                      />
                    </clipPath>
                    <clipPath id="clip4_2003_24">
                      <rect
                        width="26"
                        height="26"
                        fill="white"
                        transform="translate(146)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default Product;
