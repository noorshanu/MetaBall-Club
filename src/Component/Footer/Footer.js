import React from 'react'
import './Footer.css'
import Logo from '../../assets/Logo.png'
import colorLine from '../../assets/colorLine.png'
import {FaTwitter,FaTelegram,FaLinkedin,FaGithub} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

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
            <a href="https://twitter.com/MetaballC"target='_blank'  rel="noreferrer"><FaTwitter/></a>
                        <a href="https://t.me/metaballclub" target='_blank'  rel="noreferrer"><FaTelegram/></a>
                        <a href="/"><FaLinkedin/></a>
                        <a href="/"><FaGithub/></a>

                    </div>
          </div>
          <div className="col-md-4 col-6">
            <div className='text-center'>
            <span className='hero-btn'> <a href="/" className='hero-btn-1'>play</a></span>
            <p className='grey'>Soon...</p>
            </div>
          </div>
          <div className="col-md-2 col-6" >
            <p><a href="#about"> ABOUT</a></p>
            <p><a href="https://ik.imagekit.io/cforcrypto/metaball/whitepaper_metaball_6.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1668616013406" target='_blank' rel="noreferrer"> WHITEPAPER</a></p>
            <p><a href="/"> HOW TO MAKE MONEY AT METASOCCER</a></p>
           
           

          </div>
          <div className="col-md-2 col-6">
          <p><a href="/">  TOKEN INFO</a></p>
            
            <p><a href="/"> CONTRACT AUDITS</a></p>
            <p><NavLink to="/terms" target='_blank'> TERMS & CONDITIONS</NavLink></p>
            <p><NavLink to="/disclaimer"  target='_blank'> DISCLAIMER</NavLink></p>
         
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