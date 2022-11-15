import React from "react";
import Line from "../../assets/Biggreyline.png";

import "./Tokens.css";

function Tokens() {
  return (
    <section className="token">
      <div className="container">
        <img src={Line} alt="" className="line-2" />
      </div>

      <div class="container ">
        <div className="text-center token-sec">
          <h1>Tokenomics</h1>
          <div className="side-3">&nbsp;</div>
          <img
            src="https://ik.imagekit.io/cforcrypto/metaball/Features/tokenomics.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668248051469"
            alt=""
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
             data-aos-duration="3000"
          />
        </div>
      </div>
      <div className="container">
        <img src={Line} alt="" className="line-2" />
      </div>
    </section>
  );
}

export default Tokens;
