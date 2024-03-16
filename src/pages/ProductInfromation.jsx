import React from "react";
import { FaCircle } from "react-icons/fa6";
import Footer from "../component/Common/Footer";
export function ProductInfromation() {
    const data = [
        {
            imgelink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
    ];

    const [active, setActive] = React.useState(
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    );

    return (
        <div className="container bg-white mx-auto pt-32 flex flex-wrap">
            <div className="grid gap-4 w-[90%] mx-auto lg:w-[50%]">
                <div className="">
                    <img
                        className="h-auto w-full max-w-full rounded-sm object-cover object-center md:h-[480px]"
                        src={active}
                        alt=""
                    />
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {data.map(({ imgelink }, index) => (
                        <div key={index}>
                            <img
                                onClick={() => setActive(imgelink)}
                                src={imgelink}
                                className="h-28 max-w-full cursor-pointer object-cover object-center"
                                alt="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className=" w-[100%] mx-auto lg:w-[50%] p-10">
                <p className=" text-xl lg:text-3xl font-semibold leading-loose">
                    Bisou Accent Chair
                </p>

                <p className="font-normal text-base text-cardText mt-10 leading-loose ">
                    In publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to demonstrate the visual form of a document or a
                    typeface without relying on meaningful content. Lorem ipsum may be
                    used as a placeholder before the final copy is available. In publishing and
                    graphic design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface without relying
                </p>


                <div className="flex mt-10">
                    <p>Color :</p>

                    {
                        [1,1,1].map((ele,ind)=>{
                            return(
                                <FaCircle className="text-3xl mx-2 text-yellow-800" />
                            )
                        })
                    }

                </div>
            </div>
            <Footer/>
        </div>
    );
}
