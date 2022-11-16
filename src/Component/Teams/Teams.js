import React from 'react'
import Lines from '../../assets/Biggreyline.png'
import './Team.css'


function Teams() {
  return (
    <section className='team' id='team'>
    <div class="container text-center">
     <h1 className='team-h1'>Teams</h1>

     <p>The People Behind The Movement</p>
    </div>
    <div class="container">
    <div className="side-4">&nbsp;</div>
        <div class="row justify-content-center align-items-center g-2" data-aos="fade-up" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <div className="col-md-3 col-6">
                <div className='team-box text-center'>
                    <img src='https://ik.imagekit.io/cforcrypto/metaball/teams/3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668600189889' alt=""/>
                    <h2>John Mohr</h2>
                    <span>CEO</span>
                    <p>He is an entrepreneur with almost 13 years of
                         experience. For the last 8 years he has been focusing on gaming. 
                         He is also a involved in different Blockcahins.
                    </p>
                    
                </div>
            </div>
            <div className="col-md-3 col-6">
            <div className='team-box text-center'>
                    <img src='https://ik.imagekit.io/cforcrypto/metaball/teams/1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668600190037' alt=""/>
                    <h2>snori</h2>
                    <span>CEO</span>
                    <p>A hacker and serious tech entrepreneur and have collaborated with different projects. His main motive is to make scalable systems and security systems. 

                    </p>
                    
                </div>
                </div>
            <div className="col-md-3 col-6">
            <div className='team-box text-center'>
                    <img src='https://ik.imagekit.io/cforcrypto/metaball/teams/2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668600190154' alt=""/>
                    <h2>Susan</h2>
                    <span>advisor</span>
                    <p>Developer and serial entrepreneur in the field of information technology, specialising in 
                        Self-Sovereign Identity, Blockchain. 
                    </p>
                    
                </div>
            </div>
            <div className="col-md-3 col-6">
            <div className='team-box text-center'>
                    <img src='https://ik.imagekit.io/cforcrypto/metaball/teams/4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668612845915' alt=""/>
                    <h2>Aditya</h2>
                    <span>advisor</span>
                    <p>Full-stack developer with experience in economics and institutional fintech. Full stack 
                        developer. Advisor for a number of.
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
    <div className='container team-low'>
      <img src={Lines} alt="" className='line-2'/>
      </div>
  </section>
  )
}

export default Teams