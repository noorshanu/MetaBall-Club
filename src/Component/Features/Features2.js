import React from "react";
import "./feature.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Features2() {
  return (
    <section className="fetch2" data-aos="fade-left" data-aos-offset="300"
    data-aos-easing="ease-in-sine" data-aos-duration="2000">
      <div className="side-2">
&nbsp;
</div>
      <div className="container tab-2">
        <Tabs>
          <TabPanel>
            <div className="panel-content">
              <div className="d-flex">
                <div className="tab-image">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/metaball/Features/market_place.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668173539794"
                    alt=""
                  />
                </div>
                <div className="tab-content2">
                  <p>
                    Visit the marketplace to buy and sell different items in
                    form of NFT’s in the game using the MetaBall token.
                  </p>
                  <div className="text-btn2">
                    <a href="/" className="tab-btn ">
                      Shop
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <div className="d-flex">
                <div className="tab-image">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/metaball/Features/rewards.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668173356135"
                    alt=""
                  />
                </div>
                <div className="tab-content2">
                  <p>
                    This project allows you to earn different rewards and prizes
                    by competing against other metaverse players.
                  </p>
                  <div className="text-btn2">
                    <a href="/" className="tab-btn ">
                      Reward
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <div className="d-flex">
                <div className="tab-image">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/metaball/Features/Staking.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668173620116"
                    alt=""
                  />
                </div>
                <div className="tab-content2">
                  <p>
                    Stake your MetaBall tokens to earn cash and crypto rewards
                    in return.
                  </p>
                  <div className="text-btn2">
                    <a href="/" className="tab-btn ">
                      Staking
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabList>
            <Tab>
              <h2>Market Place</h2>
            </Tab>
            <Tab>
              <h2>Rewards</h2>
            </Tab>
            <Tab>
              <h2>Staking</h2>
            </Tab>
          </TabList>
        </Tabs>
      </div>
    </section>
  );
}

export default Features2;
