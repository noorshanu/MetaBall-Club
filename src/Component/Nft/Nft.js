import React from "react";
import "./nft.css";

import Line from "../../assets/line.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Lines from "../../assets/Biggreyline.png";

function Nft() {
  return (
    <section className="nft" id="nft">
      <div className="container text-center nft-head">
        <h1>NFTs</h1>
        <p>At MetaBall, NFTs are at the centre of everything.</p>
      </div>
      <div class="container nft-box">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-md-6 nft-para" data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine"  data-aos-duration="1000">
            <p>
              {" "}
              The NFT Marketplace has unique characters, footballs, kits, bands
              and other football accessories. Every NFT is one of a kind and has
              its own distinct appearance, personality, and energy.{" "}
            </p>
            <p>
              One NFT cannot be reproduced or shared on chain with another NFT
              under any circumstances. One NFT is equal to one vote.
            </p>
            <p>
              After the collection has been released to the public, our very own
              marketplace for NFTs will go online. Here, players will be able to
              buy, sell, and trade NFTs in order to acquire the greatest
              possible copy of the game.
            </p>
          </div>
          <div class="col-md-6 text-center nft-slider" data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine"  data-aos-duration="1000">
            <div className="" >
              <Swiper
                navigation={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: true,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="nft-slide">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/metaball/Features/nft1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668194630739"
                      alt=""
                      className="nft-1"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="nft-slide">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/metaball/Features/nft2?ik-sdk-version=javascript-1.4.3&updatedAt=1668193480172"
                      alt=""
                      className="nft-4"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="nft-slide">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/metaball/Features/nft3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668194609687"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="nft-slide">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/metaball/Features/nft4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668195070290"
                      alt=""
                      className="nft-5"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="nft-slide">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/metaball/Features/nft5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668222820201"
                      alt=""
                      className="nft-2"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="nft-slide">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/metaball/Features/nft6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668223215769"
                      alt=""
                      className="nft-3"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="nft-slide">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/metaball/Features/nft7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668531239012"
                      alt=""
                      className="nft-3"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="nft-slide">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/metaball/Features/nft8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668367284320"
                      alt=""
                      className="nft-3"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="nft-slide">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/metaball/Features/nft9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668367284267"
                      alt=""
                      className="nft-3"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="nft-slide">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/metaball/Features/nft10.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668367333308"
                      alt=""
                      className="nft-3"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container nft-line">
          <img src={Line} alt="" />
          <h1>Ways to Earn</h1>
        </div>
        <div class="container nft-box">
          <div class="row justify-content-center align-items-center g-2">
            <div >
              <p>
                The players in the game have a variety of ways to earn from the
                gameplay. The following ways are the most prominent one that
                make MetaBall the best P2E game.
              </p>
            </div>
            <div class="col-md-6 nft-para" data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine"  data-aos-duration="1000">
              <ul className="nft-list">
                <li>Buying back the utility token.</li>
                <li>Staking of NFT???s generate revenue.</li>
                <li>Gameplay itself help you earn different rewards.</li>
                <li>Holdings NFT???s is also a good way to earn.</li>
                <li>You can also bet in the games and earn.</li>
                <li>Renting your home stadium also help you generate cash.</li>
              </ul>
            </div>
            <div class="col-md-6 text-center nft-slider" data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine"  data-aos-duration="1000">
            <div className="side-2">&nbsp;</div>
              <img
                src="https://ik.imagekit.io/cforcrypto/metaball/Features/ways_to_earn.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1668531858290"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <img src={Lines} alt="" className="line-2" />
      </div>
    </section>
  );
}

export default Nft;
