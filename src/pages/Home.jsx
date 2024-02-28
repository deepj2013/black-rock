import React from 'react'
import HomeComponents from '../component/HomeComponents/HomeComponents'
import HomeAbout from '../component/HomeComponents/HomeAbout'
import HomeWhyChooseUs from '../component/HomeComponents/HomeWhyChooseUs'
import HomeOurPorduct from '../component/HomeComponents/HomeOurPorduct'
import HomeTestimonials from '../component/HomeComponents/HomeTestimonials'
import HomeRecentBlog from '../component/HomeComponents/HomeRecentBlog'
import HomeJoinUs from '../component/HomeComponents/HomeJoinUs'

function Home() {
  return (
    <div className='h-screen w-full pt-32'>
        <HomeComponents/>
        <HomeAbout/>
        <HomeWhyChooseUs/>
        <HomeOurPorduct/>
        <HomeTestimonials/>
        <HomeRecentBlog/>
        <HomeJoinUs/>
    </div>
  )
}

export default Home