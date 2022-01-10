import React from 'react'
import Header from './components/Navbar'
import Slider from './components/carouselSection'
import Banner from './components/Banner'
import Products from './components/Products'
import Poster from './components/Poster'
import OurBlog from './components/OurBlog'
import FollowUs from './components/FollowUs'
import Sinfo from './components/Sinfo'
import Bg from './components/bg'
import Footer from './components/Footer'
import Formulaire from './components/formulaire'
// eslint-disable-next-line
export default function Home() {
  return(
      <div>
        <Header/>
        <Bg/>
        {/* <Formulaire/> */}
        {/* <Slider/>
        <Banner/>
        <Products/>
        <Poster/>
        <OurBlog/>
        <FollowUs/>
        <Sinfo/> */}
        
        <Footer/>
      </div>
  )
}