import React from 'react'
import Lines from '../../assets/Biggreyline.png'
import './Roadmap.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation ,Autoplay } from "swiper";
import RoadImg from '../../assets/road.png'

function Roadmap() {
  return (
    <section className='features' id='road'>
      <div class="container text-center">
       <h1>RoadMap</h1>
       <p>The following will be the Tokenomics of MetaBall Token.</p>

       <div>
       <Swiper navigation={true} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Navigation,Autoplay]} className="mySwiper">
        <SwiperSlide>
          <div  className='row'>
            <div className='col-md'>
              <div>
              <h1>Q3 - 2022</h1>
              <p> Scene rendering </p>
              <p>Develop MetaDao Ecosystem infrastructure </p>
              <p>Develop smart contract</p>
              </div>
             
            </div>
            <div className='col-md text-center'>
              <img src={RoadImg} alt=""/>
            </div>
            
            
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
       </div>
      </div>
      <div className='container'>
        <img src={Lines} alt="" className='line-2'/>
        </div>
    </section>
  )
}

export default Roadmap