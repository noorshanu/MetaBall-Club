import React, { useState } from "react";
import Web3Modal from 'web3modal';
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../assets/Logo.png'

import {ethers} from 'ethers'

const providerOption ={

}

function Navbar() {
  const [Web3Provider ,setWeb3Provider]=useState(null)
  async function connectWallet(){
    try{
      let web3Modal=new Web3Modal( {
        cacheProvider:false,
        providerOption,

      })
      const web3ModalInstance =await web3Modal.connect();
      const web3ModalProvider =new ethers.providers.Web3Provider(web3ModalInstance);
      if (web3ModalProvider){
        setWeb3Provider(web3ModalProvider);
      }
      console.log(web3ModalProvider)
    }catch(error){
      console.error(error);

    }

  }
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className='container main-nav'>
    <div className='logo'>   <div className='d-flex foot-logo'>
            <img src={Logo} alt="" className=''/>
            <h2 className='foot-h1'>METABALL</h2>
            </div></div>
    <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
    <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#feature">Features</a></li>
        <li><a href="/">Gameplay</a></li>
        <li><a href="#toko">Tokenomics</a></li>
        <li><a href="#nft">NFTs</a></li>
        <li><a href="#road">Roadmap</a></li>
        <li><a href="#team">team</a></li>
        <li><button className="connect" onClick={connectWallet}>
          {
            Web3Provider ==null ?(
              <span>Connect</span>
            ):(
              <span>Connected!</span>
            )
          }
          </button></li>
    </ul>

    </div>
      {/* hamburget menu start  */}
      <div className="hamburger-menu">
            <a href="#home" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
    </nav>
  )
}

export default Navbar