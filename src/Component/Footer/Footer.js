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
          <div class="col-md-3 col-6">
            <img src={Logo} alt=""/>
            <h2>METABALL</h2>

            <span>© 2022 MetaBall Inc. All rights reserved</span>
            <div className='hero-social'>
                        <a href="/"><FaTwitter/></a>
                        <a href="/"><FaTelegram/></a>
                        <a href="/"><FaLinkedin/></a>
                        <a href="/"><FaGithub/></a>

                    </div>
          </div>
          <div class="col-md-3 col-6">
            <p><a href="/"> ABOUT</a></p>
            <p><a href="/"> WHITEPAPER</a></p>
            <p><a href="/"> MARKET</a></p>
            <p><a href="/"> CONTACT</a></p>
            <p><a href="/"> HELP CENTER</a></p>
            <p><a href="/"> SNAPSHOT DAO</a></p>

          </div>
          <div class="col-md-3 col-6">
          <p><a href="/">  TOKEN INFO</a></p>
            <p><a href="/"> HOW TO MAKE MONEY AT METASOCCER</a></p>
            <p><a href="/"> CONTRACT AUDITS</a></p>
            <p><a href="/"> TERMS & CONDITIONS</a></p>
            <p><a href="/"> DISCLAIMER</a></p>
         
          </div>
          <div class="col-md-3 col-6">
            <div>
            <span className='hero-btn'> <a href="/" className='hero-btn-1'>play</a></span>
            </div>
          </div>
        </div>
        <div className='cta-low'>
                <img src={colorLine} alt=""/>

            </div>
      </div>
      
    </footer>
    </>
  )
}

export default Footer