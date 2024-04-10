import React from "react";
import HomeComponents from "../component/HomeComponents/HomeComponents";
import HomeAbout from "../component/HomeComponents/HomeAbout";
import HomeWhyChooseUs from "../component/HomeComponents/HomeWhyChooseUs";
import HomeOurPorduct from "../component/HomeComponents/HomeOurPorduct";
import HomeTestimonials from "../component/HomeComponents/HomeTestimonials";
import HomeRecentBlog from "../component/HomeComponents/HomeRecentBlog";
import HomeJoinUs from "../component/HomeComponents/HomeJoinUs";

import HomeSubAbout from "../component/HomeComponents/HomeSubAbout";
import HomeService1 from "../component/HomeComponents/HomeService1";
import Footer from "../component/Common/Footer";

function Home() {
  return (
    <div className="">
      <HomeComponents />
      <HomeAbout />
      <HomeSubAbout />
      <HomeService1 />
      
      <Footer />
    </div>
  );
}

export default Home;
