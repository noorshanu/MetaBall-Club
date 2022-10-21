import React from 'react'
import Lines from '../../assets/Biggreyline.png'
import './Team.css'
import Team1 from '../../assets/team/t1.png'
import Team2 from '../../assets/team/t2.png'
import Team3 from '../../assets/team/t3.png'
import Team4 from '../../assets/team/t4.png'
function Teams() {
  return (
    <section className='team' id='team'>
    <div class="container text-center">
     <h1>Teams</h1>

     <p>The People Behind The Movement</p>
    </div>
    <div class="container">
        <div class="row justify-content-center align-items-center g-2">
            <div className="col-md-3 col-6">
                <div className='team-box text-center'>
                    <img src={Team1} alt=""/>
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
                    <img src={Team2} alt=""/>
                    <h2>snori</h2>
                    <span>CEO</span>
                    <p>A hacker and serious tech entrepreneur and have collaborated with different projects. His main motive is to make scalable systems and security systems. 

                    </p>
                    
                </div>
                </div>
            <div className="col-md-3 col-6">
            <div className='team-box text-center'>
                    <img src={Team3} alt=""/>
                    <h2>Susan</h2>
                    <span>advisor</span>
                    <p>Developer and serial entrepreneur in the field of information technology, specialising in 
                        Self-Sovereign Identity, Blockchain. 
                    </p>
                    
                </div>
            </div>
            <div className="col-md-3 col-6">
            <div className='team-box text-center'>
                    <img src={Team4} alt=""/>
                    <h2>jane</h2>
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