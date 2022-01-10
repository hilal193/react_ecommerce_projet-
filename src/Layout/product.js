import React from 'react'
import Header from './components/Navbar'
import Slider from './components/carouselSection'
import Banner from './components/Banner'
import Banner2 from './components/banner2'
import Products from './components/Products'
import Poster from './components/Poster'
import OurBlog from './components/OurBlog'
import FollowUs from './components/FollowUs'
import Sinfo from './components/Sinfo'
import Footer from './components/Footer'
// eslint-disable-next-line
export default function Home() {
  return(
      <div>
        <Header/>
        {/* <Slider/> */}
        <Banner2/>
        <OurBlog/>
        <FollowUs/>
        <Sinfo/>
        <Footer/>
      </div>
  )
}