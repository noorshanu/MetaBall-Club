import React from 'react'
import './About.css'
import AboutImg from '../../assets/blnkpic.png'
function About() {
  return (
    <section className='about-main'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='about-img'>
                    <img src={AboutImg} alt=""/>

                </div>
            </div>
            <div className='col-md-6'>
                <div className='about-content'>
                    <h1>About</h1>
                    <p>In order to provide a live exposure of the people into the football field the
                         MetaBall Club presents MetaBall Football Game, where the feeling of real and 
                         virtual are almost the same. The main motive of the core team behind this project 
                         is to provide best experience to players in metaverse. </p>
                    <p>
                        All the assets in this metaverse game will be in the form of NFT’s and every NFT is
                         equivalent to one vote. This project will be a DAO game in the metaverse. The 
                         number of having NFT’s is directly related to votes. The more NFT’s you have the 
                         more votes you will have and having more NFT, or Votes is related to your strength 
                         in the project. It means with more votes you can have more strength in the game.
                         </p>

                      <p> This project is based on Avalance, BSC, Etherium, and Polygon. The advertisements in the
                         metaverse will be active advertisements and the revenue generated from them can be used 
                         to buy back MetaBall tokens. The native token of this MetaBall Project will be the MetaBall 
                         Token. </p> 

                      <p> All the transactions within this project will be made in the native token.</p>  

                      <div className='about-btn-box'>
                      <span className='hero-btn'> <a href="/" className='hero-btn-1'>play</a></span>
                        </div>    

                </div>

            </div>

        </div>
        
    </div>
    </section>
  )
}

export default About