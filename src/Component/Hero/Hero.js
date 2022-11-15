import React from 'react'
import './Hero.css'
import {FaTwitter,FaTelegram,FaLinkedin,FaGithub} from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,EffectFade, Autoplay } from "swiper";
function Hero() {
  return (
    <section className='Hero-main'>
   <Swiper
            navigation={true}
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade,Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
            <div className='bg1'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-6  align-items-center'>
                    <h1 className='pt-2 hero-h1'>
                    Where the Players Want to
                    </h1>
                    <span className='hero-btn'> <a href="/" className='hero-btn-1'>play</a></span>
                    <p className='grey'>Soon...</p>

                    <div>
                    <p className='hero-p'>Connect With The Amazing Community</p>
                    <div className='hero-social'>
                        <a href="/"><FaTwitter/></a>
                        <a href="/"><FaTelegram/></a>
                        <a href="/"><FaLinkedin/></a>
                        <a href="/"><FaGithub/></a>

                    </div>
                    </div>

                </div>
                <div className='col-md-6'>
                    
                </div>

            </div>

        </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg2'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-6  align-items-center'>
                    <h1 className='pt-2 hero-h1'>
                    Where the Players Want to 2
                    </h1>
                    <span className='hero-btn'> <a href="/" className='hero-btn-1'>play</a></span>
                    <p className='grey'>Soon...</p>

                    <div>
                    <p className='hero-p'>Connect With The Amazing Community</p>
                    <div className='hero-social'>
                        <a href="/"><FaTwitter/></a>
                        <a href="/"><FaTelegram/></a>
                        <a href="/"><FaLinkedin/></a>
                        <a href="/"><FaGithub/></a>

                    </div>
                    </div>

                </div>
                <div className='col-md-6'>
                    
                </div>

            </div>

        </div>
        </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg3'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-6  align-items-center'>
                    <h1 className='pt-2 hero-h1'>
                    Where the Players Want to 
                    </h1>
                    <span className='hero-btn'> <a href="/" className='hero-btn-1'>play</a></span>
                    <p className='grey'>Soon...</p>

                    <div>
                    <p className='hero-p'>Connect With The Amazing Community</p>
                    <div className='hero-social'>
                        <a href="/"><FaTwitter/></a>
                        <a href="/"><FaTelegram/></a>
                        <a href="/"><FaLinkedin/></a>
                        <a href="/"><FaGithub/></a>

                    </div>
                    </div>

                </div>
                <div className='col-md-6'>
                    
                </div>

            </div>

        </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg4'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-6  align-items-center'>
                    <h1 className='pt-2 hero-h1'>
                    Where the Players Want to 
                    </h1>
                    <span className='hero-btn'> <a href="/" className='hero-btn-1'>play</a></span>
                    <p className='grey'>Soon...</p>

                    <div>
                    <p className='hero-p'>Connect With The Amazing Community</p>
                    <div className='hero-social'>
                        <a href="/"><FaTwitter/></a>
                        <a href="/"><FaTelegram/></a>
                        <a href="/"><FaLinkedin/></a>
                        <a href="/"><FaGithub/></a>

                    </div>
                    </div>

                </div>
                <div className='col-md-6'>
                    
                </div>

            </div>

        </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg5'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-6  align-items-center'>
                    <h1 className='pt-2 hero-h1'>
                    Where the Players Want to 
                    </h1>
                    <span className='hero-btn'> <a href="/" className='hero-btn-1'>play</a></span>
                    <p className='grey'>Soon...</p>
                   

                    <div>
                    <p className='hero-p'>Connect With The Amazing Community</p>
                    <div className='hero-social'>
                        <a href="https://twitter.com/MetaballC" target='_twitter'><FaTwitter/></a>
                        <a href="https://t.me/metaballclub" target='_tele' ><FaTelegram/></a>
                        <a href="/"><FaLinkedin/></a>
                        <a href="/"><FaGithub/></a>

                    </div>
                    </div>

                </div>
                <div className='col-md-6'>
                    
                </div>

            </div>

        </div>
        </div>
            </SwiperSlide>
            </Swiper>


    </section>
  )
}

export default Hero