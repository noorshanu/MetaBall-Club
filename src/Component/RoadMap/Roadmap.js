import React from "react";
import Lines from "../../assets/Biggreyline.png";
import "./Roadmap.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import RoadImg from "../../assets/road.png";

function Roadmap() {
  return (
    <section className="features" id="road">
      <div class="container road-head">
        <h1>RoadMap</h1>
        <p>The following will be the Tokenomics of MetaBall Token.</p>

        <div className="swiper-road">
          <Swiper
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Navigation, Autoplay]}
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
                  <img src={RoadImg} alt="" />
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
                  <img src={RoadImg} alt="" />
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
                  <img src={RoadImg} alt="" />
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
                  <img src={RoadImg} alt="" />
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
                  <img src={RoadImg} alt="" />
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
                  <img src={RoadImg} alt="" />
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
                  <img src={RoadImg} alt="" />
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
