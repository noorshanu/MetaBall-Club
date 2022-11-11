import React from "react";
import "./feature.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Features() {
  return (
    <section className="features" id="feature">
      <div class="container text-center">
        <h1>Teams</h1>
        <p>
          The MetaBall Club is packed with top class features that make it more
          attractive.
        </p>
      </div>

      <div className="container">
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
                    The MetaBall Utility token stores your values and grants you
                    access to the unlimited elements in the MetaBall Football
                    Game.
                  </p>
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
                    The MetaBall Utility token stores your values and grants you
                    access to the unlimited elements in the MetaBall Football
                    Game.
                  </p>
                </div>
                <div className="tab-image">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/metaball/Features/realtime_ads.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668173577727"
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
