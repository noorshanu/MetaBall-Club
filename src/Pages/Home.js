import React from 'react'
import About from '../Component/About/About'
import Features from '../Component/Features/Features'
import Footer from '../Component/Footer/Footer'
import Hero from '../Component/Hero/Hero'
import HeroCta from '../Component/Hero/HeroCta'
import Navbar from '../Component/Navbar/Navbar'
import Nft from '../Component/Nft/Nft'
import Roadmap from '../Component/RoadMap/Roadmap'
import Teams from '../Component/Teams/Teams'
import Tokens from '../Component/Tokens/Tokens'
import "swiper/css/bundle";
import Features2 from '../Component/Features/Features2'

function Home() {
  return (
    <>
    <Navbar/>
    <div>
    <Hero/>
    <HeroCta/>

    </div>
    <div>
      <About/>
    </div>
    <div>
      <Features/>
      <Features2/>
      <Tokens/>
      <Nft/>
      <Roadmap/>
      <Teams/>
      <Footer/>
    </div>
    </>
  )
}

export default Home