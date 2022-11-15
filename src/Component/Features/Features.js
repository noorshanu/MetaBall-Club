import React from "react";
import "./feature.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


function Features() {
  return (
    <section className="features" id="feature" >
      <div class="container text-center">
        <h1 className='team-h1'>Features</h1>
        <p>
          The MetaBall Club is packed with top class features that make it more
          attractive.
        </p>
      </div>
<div className="side-1">
&nbsp;
</div>
      <div className="container" data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="2000">
        <Tabs>
          <TabList>
            <Tab>
              <h2>utility token</h2>
            </Tab>
            <Tab>
              <h2>meta verse</h2>
            </Tab>
            <Tab>
              <h2>realtime ads</h2>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="panel-content">
              <div className="d-flex">
                <div className="tab-content">
                  <p>
                    The MetaBall Utility token stores your values and grants you
                    access to the unlimited elements in the MetaBall Football
                    Game.
                  </p>
                  <div className="text-btn">
                    <a href="/" className="tab-btn ">
                      Explore
                    </a>
                  </div>
                </div>
                <div className="tab-image">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/metaball/Features/utility_token.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668171177766"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <div className="d-flex">
                <div className="tab-content">
                  <p>
                    Built on Blockchain Metaverse, MetaBall metaverse allows you
                    to play with other real-time players and experience the best
                    of the metaverse.
                  </p>
                  <div className="text-btn">
                    <a href="/" className="tab-btn ">
                      Metaverse
                    </a>
                  </div>
                </div>
                <div className="tab-image">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/metaball/Features/metaverse.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668173325394"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <div className="d-flex">
                <div className="tab-content">
                  <p>
                    We know ads are boring but what about when ads give you a
                    great return. The revenue generated from ads in metaverse
                    will buy back MetaBall tokens.
                  </p>
                  <div className="text-btn">
                    <a href="/" className="tab-btn ">
                      Realtime Ads
                    </a>
                  </div>
                </div>
                <div className="tab-image">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/metaball/Features/realtime_ads.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668527829190"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>

    </section>
  );
}

export default Features;
