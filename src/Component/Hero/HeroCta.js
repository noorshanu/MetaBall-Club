import React from 'react'
import SmallLine from '../../assets/smallgrayLine.png'
import colorLine from '../../assets/colorLine.png'
import ProgressBar from "@ramonak/react-progress-bar";

import './Hero.css'

function HeroCta() {
  return (
    <section className='cta'>
        <div className='container'>
            <div className='cta-head'>
                <img src={SmallLine} alt="" style={{height:'3px'}}/>

            </div>
            <div className='cta-content '>
                <h2>For your entertainment, we present you the <span className='cta-span'>MetaBall Club.</span> </h2>
                <h3>Experience what it would be like to play on the field and have access to a range of awards and NFTs that may be exchanged for money or other unusual items throughout games.
</h3>

            </div>
            <div className='cta-low'>
                <img src={colorLine} alt=""/>

            </div>
            <div className='col-md-6 presale-mob'>

            <div className="presale">
                    <div className="presale-box">
                      <h1>PRESALE - 1</h1>
                      <h1>1 MTB = 0.025 USD</h1>
                      <ProgressBar
                        completed={80}
                        className="wrappers"
                        barContainerClassName="containers"
                        completedClassName="barCompleted"
                        labelClassName="label"
                      />
                      <p>Sold- 1,000,000,0 / 3,000,000,00</p>
                      <p>Raised- 1,000,000,0 / 3,000,000,00</p>
                      <div className="presale-btn">
                      <a href="/">BUY MTB</a>
                        <a href="/" className="claim">CLAIM</a>
                      </div>
                    </div>
                  </div>
                
            </div>

        </div>
    </section>
  )
}

export default HeroCta