import React from 'react'
import "./feature.css";
import Blank from "../../assets/blnkpic.png";
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
                  <img src={Blank} alt="" />
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
               <img src={Blank} alt="" />
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
               <img src={Blank} alt="" />
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
              <h2>utility token</h2>
            </Tab>
            <Tab>
              <h2>meta verse</h2>
            </Tab>
            <Tab>
              <h2>realtime ads</h2>
            </Tab>
          </TabList>
        </Tabs>
      </div>

    </section>
  )
}

export default Features2