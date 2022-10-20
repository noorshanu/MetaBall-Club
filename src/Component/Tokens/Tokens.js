import React from 'react'
import Line from '../../assets/Biggreyline.png'
import Blank from '../../assets/blnkpic.png'
import './Tokens.css'

function Tokens() {
  return (
    <section className='token'>
        <div className='container'>
        <img src={Line} alt="" className='line-2'/>
        </div>
        
        <div class="container ">
            <div className='text-center token-sec'>
                <h1>Tokenomics</h1>

                <img src={Blank} alt=""/>
            </div>
        </div>
        <div className='container'>
        <img src={Line} alt="" className='line-2'/>
        </div>
    </section>
  )
}

export default Tokens