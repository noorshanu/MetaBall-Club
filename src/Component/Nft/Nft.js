import React from 'react'
import './nft.css'
import Tshirt from '../../assets/tshirt.png'
import Line from '../../assets/line.png'
import Nfts from '../../assets/nft.png'
import Lines from '../../assets/Biggreyline.png'
function Nft() {
  return (
    <section className='nft'>
    <div className='container text-center nft-head'>
        <h1>NFTs</h1>
        <p>At MetaBall, NFTs are at the centre of everything.</p>
    </div>
    <div class="container nft-box">
        <div class="row justify-content-center align-items-center g-2">
        <div class="col-md-6 nft-para">
                <p> The NFT Marketplace has unique characters, footballs, kits, bands and other 
                    football accessories. Every NFT is one of a kind and has its own distinct appearance,
                    personality, and energy. </p>
                <p>One NFT cannot be reproduced or shared on chain with another NFT under any circumstances.
                     One NFT is equal to one vote.</p>
                <p>After the collection has been released to the public, our very own marketplace for NFTs will go
                     online. Here, players will be able to buy, sell, and trade NFTs in order to acquire the greatest possible 
                     copy of the game.</p>
                </div>
            <div class="col-md-6 text-center nft-slider">
                <img src={Tshirt} alt=""/>

            </div>
            
        </div>
    </div>   
<div>

    <div className='container nft-line' >
        <img src={Line} alt=""/>
        <h1>Ways to Earn</h1>
        
    </div>
<div class="container nft-box">
        <div class="row justify-content-center align-items-center g-2">
      
        <div class="col-md-6 nft-para">
                <ul className='nft-list'>
                    <li>Buying back the utility token.</li>
                    <li>Staking of NFT’s generate revenue.</li>
                    <li>Gameplay itself help you earn different rewards.</li>
                    <li>Holdings NFT’s is also a good way to earn.</li>
                    <li>You can also bet in the games and earn.</li>
                    <li>Renting your home stadium also help you generate cash.</li>

                </ul>
                </div>
            <div class="col-md-6 text-center nft-slider">
                <img src={Nfts} alt=""/>

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

export default Nft