import React, { useState } from "react";
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../assets/Logo.png'

function Navbar() {
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
        <li><a href="/">About</a></li>
        <li><a href="/">Features</a></li>
        <li><a href="/">Gameplay</a></li>
        <li><a href="/">Tokenomics</a></li>
        <li><a href="/">NFTs</a></li>
        <li><a href="/">Roadmap</a></li>
        <li><a href="/">team</a></li>
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