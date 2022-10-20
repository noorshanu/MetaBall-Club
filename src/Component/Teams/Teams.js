import React from 'react'
import Lines from '../../assets/Biggreyline.png'
import './Team.css'
import Team1 from '../../assets/team/t1.png'
import Team2 from '../../assets/team/t2.png'
import Team3 from '../../assets/team/t3.png'
import Team4 from '../../assets/team/t4.png'
function Teams() {
  return (
    <section className='features'>
    <div class="container text-center">
     <h1>Teams</h1>

     <p>The People Behind The Movement</p>
    </div>
    <div class="container">
        <div class="row justify-content-center align-items-center g-2">
            <div class="col-md-3">
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
            <div class="col-md-3">
            <div className='team-box text-center'>
                    <img src={Team2} alt=""/>
                    <h2>snori</h2>
                    <span>CEO</span>
                    <p>He is an entrepreneur with almost 13 years of
                         experience. For the last 8 years he has been focusing on gaming. 
                         He is also a involved in different Blockcahins.
                    </p>
                    
                </div>
                </div>
            <div class="col-md-3">
            <div className='team-box text-center'>
                    <img src={Team3} alt=""/>
                    <h2>John Mohr</h2>
                    <span>CEO</span>
                    <p>He is an entrepreneur with almost 13 years of
                         experience. For the last 8 years he has been focusing on gaming. 
                         He is also a involved in different Blockcahins.
                    </p>
                    
                </div>
            </div>
            <div class="col-md-3">
            <div className='team-box text-center'>
                    <img src={Team4} alt=""/>
                    <h2>John Mohr</h2>
                    <span>CEO</span>
                    <p>He is an entrepreneur with almost 13 years of
                         experience. For the last 8 years he has been focusing on gaming. 
                         He is also a involved in different Blockcahins.
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
    <div className='container'>
      <img src={Lines} alt="" className='line-2'/>
      </div>
  </section>
  )
}

export default Teams