import React from 'react'
import SmallLine from '../../assets/smallgrayLine.png'
import colorLine from '../../assets/colorLine.png'

import './Hero.css'

function HeroCta() {
  return (
    <section className='cta'>
        <div className='container'>
            <div className='cta-head'>
                <img src={SmallLine} alt=""/>

            </div>
            <div className='cta-content '>
                <h2>For your entertainment, we present you the <span className='cta-span'>MetaBall Club.</span> </h2>
                <h3>Experience what it would be like to play on the field and have access to a range of awards and NFTs that may be exchanged for money or other unusual items throughout games.
</h3>

            </div>
            <div className='cta-low'>
                <img src={colorLine} alt=""/>

            </div>

        </div>
    </section>
  )
}

export default HeroCta