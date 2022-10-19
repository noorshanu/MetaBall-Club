import React from 'react'
import About from '../Component/About/About'
import Features from '../Component/Features/Features'
import Hero from '../Component/Hero/Hero'
import HeroCta from '../Component/Hero/HeroCta'
import Navbar from '../Component/Navbar/Navbar'

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
    </div>
    </>
  )
}

export default Home