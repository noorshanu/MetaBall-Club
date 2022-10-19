import React from 'react'
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
    </>
  )
}

export default Home