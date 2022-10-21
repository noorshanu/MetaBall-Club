import React from 'react'
import './Hero.css'
import {FaTwitter,FaTelegram,FaLinkedin,FaGithub} from 'react-icons/fa'

function Hero() {
  return (
    <section className='Hero-main'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6  align-items-center'>
                    <h1 className='pt-2 hero-h1'>
                    Where the Players Want to
                    </h1>
                    <span className='hero-btn'> <a href="/" className='hero-btn-1'>play</a></span>
                   

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
    </section>
  )
}

export default Hero