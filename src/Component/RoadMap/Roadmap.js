import React from "react";
import Lines from "../../assets/Biggreyline.png";
import "./Roadmap.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,EffectFade, Autoplay } from "swiper";


function Roadmap() {
  return (
    <section className="features" id="road">
      <div class="container road-head">
        <h1>RoadMap</h1>
        <p>The following will be the Tokenomics of MetaBall Token.</p>

        <div className="swiper-road">
          <Swiper
            navigation={true}
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade,Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="row">
                <div className="col-md-6 text-start">
                  <div className="road-content">
                    <h1>Q3 - 2022</h1>
                    <div className="road-p">
                      <p> Scene rendering </p>
                      <p>Develop MetaDao Ecosystem infrastructure </p>
                      <p>Develop smart contract</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <img src='https://ik.imagekit.io/cforcrypto/metaball/Features/road_map1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668272312842' alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-6 text-start">
                  <div className="road-content">
                    <h1>Q4 2022</h1>
                    <div className="road-p">
                      <p> Website release </p>
                      <p>Whitepaper </p>
                      <p>Community growth </p>
                      <p>Ico </p>
                      <p>MetaDao testing</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <img src='https://ik.imagekit.io/cforcrypto/metaball/Features/road_map2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668272312439' alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-6 text-start">
                  <div className="road-content">
                    <h1>Q1 2023</h1>
                    <div className="road-p">
                      <p>NFTs launch </p>
                      <p>Marketplace </p>
                      <p>MetaDao Beta </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <img src='https://ik.imagekit.io/cforcrypto/metaball/Features/road_map3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668272310106' alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-6 text-start">
                  <div className="road-content">
                    <h1>Q2 2023</h1>
                    <div className="road-p">
                      <p>Full version game in metadao </p>
                      <p>NFTs staking </p>
                      <p>Betting test </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <img src='https://ik.imagekit.io/cforcrypto/metaball/Features/road_map4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668272310161' alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-6 text-start">
                  <div className="road-content">
                    <h1>Q3 2023</h1>
                    <div className="road-p">
                      <p>Betting launch </p>
                      <p>Live ads in metaverse </p>
                      <p>Rental stadium </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <img src='https://ik.imagekit.io/cforcrypto/metaball/Features/road_map5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668272310123' alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-6 text-start">
                  <div className="road-content">
                    <h1>Q4 2023</h1>
                    <div className="road-p">
                      <p>Governance for further development </p>
                      <p>Establishment of MetaDao Office </p>
                      <p>And Community meetup</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <img src='https://ik.imagekit.io/cforcrypto/metaball/Features/road_map6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668272311638' alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-6 text-start">
                  <div className="road-content">
                    <h1>Q1 2024 </h1>
                    <div className="road-p">
                      <p>To be continued </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <img src='https://ik.imagekit.io/cforcrypto/metaball/Features/road_map7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668272310117' alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container">
        <img src={Lines} alt="" className="line-2" />
      </div>
    </section>
  );
}

export default Roadmap;
