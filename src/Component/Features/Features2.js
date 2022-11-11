import React from 'react'
import "./feature.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Features2() {
  return (
    <section className='fetch2'>
           <div className="container tab-2">
        <Tabs>
         

          <TabPanel>
            <div className="panel-content">
              <div className="d-flex">
             
                <div className="tab-image">
                  <img src='https://ik.imagekit.io/cforcrypto/metaball/Features/market_place.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668173539794' alt="" />
                </div>
                <div className="tab-content">
                  <p>
                    The MetaBall Utility token stores your values and grants you
                    access to the unlimited elements in the MetaBall Football
                    Game.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
            <div className="d-flex">
             
             <div className="tab-image">
               <img src='https://ik.imagekit.io/cforcrypto/metaball/Features/rewards.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668173356135' alt="" />
             </div>
             <div className="tab-content">
               <p>
                 The MetaBall Utility token stores your values and grants you
                 access to the unlimited elements in the MetaBall Football
                 Game.
               </p>
             </div>
           </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
            <div className="d-flex">
             
             <div className="tab-image">
               <img src='https://ik.imagekit.io/cforcrypto/metaball/Features/Staking.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668173620116' alt="" />
             </div>
             <div className="tab-content">
               <p>
                 The MetaBall Utility token stores your values and grants you
                 access to the unlimited elements in the MetaBall Football
                 Game.
               </p>
             </div>
           </div>
            </div>
          </TabPanel>


          <TabList>
            <Tab>
              <h2>Market
Place</h2>
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
  )
}

export default Features2