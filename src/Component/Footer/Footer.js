import React from 'react'
import './Footer.css'
import Logo from '../../assets/Logo.png'
import colorLine from '../../assets/colorLine.png'
import {FaTwitter,FaTelegram,FaLinkedin,FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    <>
    <footer className='footer'>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-md-4 col-6">
            <div className='d-flex foot-logo'>
            <img src={Logo} alt="" className=''/>
            <h2 className='foot-h1'>METABALL</h2>
            </div>
           

            <span className='copyright'>© 2022 MetaBall Inc. All rights reserved</span>
            <div className=' foot-soc'>
                        <a href="/"><FaTwitter/></a>
                        <a href="/"><FaTelegram/></a>
                        <a href="/"><FaLinkedin/></a>
                        <a href="/"><FaGithub/></a>

                    </div>
          </div>
          <div className="col-md-4 col-6">
            <div className='text-center'>
            <span className='hero-btn'> <a href="/" className='hero-btn-1'>play</a></span>
            </div>
          </div>
          <div className="col-md-2 col-6" >
            <p><a href="/"> ABOUT</a></p>
            <p><a href="/"> WHITEPAPER</a></p>
            <p><a href="/"> MARKET</a></p>
            <p><a href="/"> CONTACT</a></p>
            <p><a href="/"> HELP CENTER</a></p>
            <p><a href="/"> SNAPSHOT DAO</a></p>

          </div>
          <div className="col-md-2 col-6">
          <p><a href="/">  TOKEN INFO</a></p>
            <p><a href="/"> HOW TO MAKE MONEY AT METASOCCER</a></p>
            <p><a href="/"> CONTRACT AUDITS</a></p>
            <p><a href="/"> TERMS & CONDITIONS</a></p>
            <p><a href="/"> DISCLAIMER</a></p>
         
          </div>
        
        </div>
        <div className='cta-low foot-low'>
                <img src={colorLine} alt=""/>

            </div>
      </div>
      
    </footer>
    </>
  )
}

export default Footer