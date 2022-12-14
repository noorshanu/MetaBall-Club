import React from "react";
import "./Hero.css";
import { FaTwitter, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProgressBar from "@ramonak/react-progress-bar";
import { Navigation, EffectFade, Autoplay } from "swiper";
function Hero() {
  return (
    <section className="Hero-main">
      <Swiper
        navigation={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg1">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6  align-items-center"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h1 className="pt-2 hero-h1">Where the Players Want to</h1>
                  <span className="hero-btn">
                    {" "}
                    <a href="/" className="hero-btn-1">
                      play
                    </a>
                  </span>
                  <p className="grey">Soon...</p>

                  <div>
                    <p className="hero-p">Connect With The Amazing Community</p>
                    <div className="hero-social">
                      <a
                        href="https://twitter.com/MetaballC"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href="https://t.me/metaballclub"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTelegram />
                      </a>
                      <a href="/">
                        <FaLinkedin />
                      </a>
                      <a href="/">
                        <FaGithub />
                      </a>
                    </div>
                    <div className="hero-buttons">
                      <a
                        href="https://bscscan.com/address/0xbacde2bb4adc1fe9fe84c560061e3ee23fc751e6#code"
                        target="_blank"
                        rel="noreferrer"
                        className="connect-2"
                      >
                        Contract
                      </a>
                      <a
                        href="https://ik.imagekit.io/cforcrypto/metaball/whitepaper_metaball_6.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1668616013406"
                        target="_blank"
                        rel="noreferrer"
                        className="connect-2"
                      >
                        Whitepaper
                      </a>
                      <a href="/" className="connect-2">
                        Audit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="presale  sale-desktop ">
                    <div className="presale-box">
                      <h1>PRESALE - 1</h1>
                      <h1>1 MTB = 0.025 USD</h1>
                      <ProgressBar
                        completed={80}
                        className="wrappers"
                        barContainerClassName="containers"
                        completedClassName="barCompleted"
                        labelClassName="label"
                      />
                      <p>Sold- 1,000,000,0 / 3,000,000,00</p>
                      <p>Raised- 1,000,000,0 / 3,000,000,00</p>
                      <div className="presale-input d-flex">
                        <div className="mb-3">
                          
                          <input type="number"
                            className="form-control" name="BNB" id="" aria-describedby="helpId" placeholder="BNB"/>
                          
                        </div>
                        <div className="mb-3">
                          
                        <input type="number"
                            className="form-control form-control2" name="MTB" id="" aria-describedby="helpId" placeholder="MTB"/>
                          
                        </div>

                      </div>
                      <div className="presale-btn">
                        
                        <a href="/">BUY MTB</a>
                        <a href="/" className="claim">CLAIM</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg2">
            <div className="container">
              <div className="row">
                <div className="col-md-6  align-items-center">
                  <h1 className="pt-2 hero-h1">Where the Players Want to 2</h1>
                  <span className="hero-btn">
                    {" "}
                    <a href="/" className="hero-btn-1">
                      play
                    </a>
                  </span>
                  <p className="grey">Soon...</p>

                  <div>
                    <p className="hero-p">Connect With The Amazing Community</p>
                    <div className="hero-social">
                      <a
                        href="https://twitter.com/MetaballC"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href="https://t.me/metaballclub"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTelegram />
                      </a>
                      <a href="/">
                        <FaLinkedin />
                      </a>
                      <a href="/">
                        <FaGithub />
                      </a>
                    </div>
                    <div className="hero-buttons">
                      <a
                        href="https://bscscan.com/address/0xbacde2bb4adc1fe9fe84c560061e3ee23fc751e6#code"
                        target="_blank"
                        rel="noreferrer"
                        className="connect-2"
                      >
                        Contract
                      </a>
                      <a
                        href="https://ik.imagekit.io/cforcrypto/metaball/whitepaper_metaball_6.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1668616013406"
                        target="_blank"
                        rel="noreferrer"
                        className="connect-2"
                      >
                        Whitepaper
                      </a>
                      <a href="/" className="connect-2">
                        Audit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                <div className="presale  sale-desktop ">
                    <div className="presale-box">
                      <h1>PRESALE - 1</h1>
                      <h1>1 MTB = 0.025 USD</h1>
                      <ProgressBar
                        completed={80}
                        className="wrappers"
                        barContainerClassName="containers"
                        completedClassName="barCompleted"
                        labelClassName="label"
                      />
                      <p>Sold- 1,000,000,0 / 3,000,000,00</p>
                      <p>Raised- 1,000,000,0 / 3,000,000,00</p>
                      <div className="presale-input d-flex">
                        <div className="mb-3">
                          
                          <input type="number"
                            className="form-control" name="BNB" id="" aria-describedby="helpId" placeholder="BNB"/>
                          
                        </div>
                        <div className="mb-3">
                          
                        <input type="number"
                            className="form-control form-control2" name="MTB" id="" aria-describedby="helpId" placeholder="MTB"/>
                          
                        </div>

                      </div>
                      <div className="presale-btn">
                      <a href="/">BUY MTB</a>
                        <a href="/" className="claim">CLAIM</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg3">
            <div className="container">
              <div className="row">
                <div className="col-md-6  align-items-center">
                  <h1 className="pt-2 hero-h1">Where the Players Want to</h1>
                  <span className="hero-btn">
                    {" "}
                    <a href="/" className="hero-btn-1">
                      play
                    </a>
                  </span>
                  <p className="grey">Soon...</p>

                  <div>
                    <p className="hero-p">Connect With The Amazing Community</p>
                    <div className="hero-social">
                      <a
                        href="https://twitter.com/MetaballC"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href="https://t.me/metaballclub"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTelegram />
                      </a>
                      <a href="/">
                        <FaLinkedin />
                      </a>
                      <a href="/">
                        <FaGithub />
                      </a>
                    </div>
                    <div className="hero-buttons">
                      <a
                        href="https://bscscan.com/address/0xbacde2bb4adc1fe9fe84c560061e3ee23fc751e6#code"
                        target="_blank"
                        rel="noreferrer"
                        className="connect-2"
                      >
                        Contract
                      </a>
                      <a
                        href="https://ik.imagekit.io/cforcrypto/metaball/whitepaper_metaball_6.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1668616013406"
                        target="_blank"
                        rel="noreferrer"
                        className="connect-2"
                      >
                        Whitepaper
                      </a>
                      <a href="/" className="connect-2">
                        Audit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                <div className="presale  sale-desktop ">
                    <div className="presale-box">
                      <h1>PRESALE - 1</h1>
                      <h1>1 MTB = 0.025 USD</h1>
                      <ProgressBar
                        completed={80}
                        className="wrappers"
                        barContainerClassName="containers"
                        completedClassName="barCompleted"
                        labelClassName="label"
                      />
                      <p>Sold- 1,000,000,0 / 3,000,000,00</p>
                      <p>Raised- 1,000,000,0 / 3,000,000,00</p>
                      <div className="presale-input d-flex">
                        <div className="mb-3">
                          
                          <input type="number"
                            className="form-control" name="BNB" id="" aria-describedby="helpId" placeholder="BNB"/>
                          
                        </div>
                        <div className="mb-3">
                          
                        <input type="number"
                            className="form-control form-control2" name="MTB" id="" aria-describedby="helpId" placeholder="MTB"/>
                          
                        </div>

                      </div>
                      <div className="presale-btn">
                      <a href="/">BUY MTB</a>
                        <a href="/" className="claim">CLAIM</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg4">
            <div className="container">
              <div className="row">
                <div className="col-md-6  align-items-center">
                  <h1 className="pt-2 hero-h1">Where the Players Want to</h1>
                  <span className="hero-btn">
                    {" "}
                    <a href="/" className="hero-btn-1">
                      play
                    </a>
                  </span>
                  <p className="grey">Soon...</p>

                  <div>
                    <p className="hero-p">Connect With The Amazing Community</p>
                    <div className="hero-social">
                      <a
                        href="https://twitter.com/MetaballC"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href="https://t.me/metaballclub"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTelegram />
                      </a>
                      <a href="/">
                        <FaLinkedin />
                      </a>
                      <a href="/">
                        <FaGithub />
                      </a>
                    </div>
                    <div className="hero-buttons">
                      <a
                        href="https://bscscan.com/address/0xbacde2bb4adc1fe9fe84c560061e3ee23fc751e6#code"
                        target="_blank"
                        rel="noreferrer"
                        className="connect-2"
                      >
                        Contract
                      </a>
                      <a
                        href="https://ik.imagekit.io/cforcrypto/metaball/whitepaper_metaball_6.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1668616013406"
                        target="_blank"
                        rel="noreferrer"
                        className="connect-2"
                      >
                        Whitepaper
                      </a>
                      <a href="/" className="connect-2">
                        Audit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                <div className="presale  sale-desktop ">
                    <div className="presale-box">
                      <h1>PRESALE - 1</h1>
                      <h1>1 MTB = 0.025 USD</h1>
                      <ProgressBar
                        completed={80}
                        className="wrappers"
                        barContainerClassName="containers"
                        completedClassName="barCompleted"
                        labelClassName="label"
                      />
                      <p>Sold- 1,000,000,0 / 3,000,000,00</p>
                      <p>Raised- 1,000,000,0 / 3,000,000,00</p>
                      <div className="presale-input d-flex">
                        <div className="mb-3">
                          
                          <input type="number"
                            className="form-control" name="BNB" id="" aria-describedby="helpId" placeholder="BNB"/>
                          
                        </div>
                        <div className="mb-3">
                          
                        <input type="number"
                            className="form-control form-control2" name="MTB" id="" aria-describedby="helpId" placeholder="MTB"/>
                          
                        </div>

                      </div>
                      <div className="presale-btn">
                      <a href="/">BUY MTB</a>
                        <a href="/" className="claim">CLAIM</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg5">
            <div className="container">
              <div className="row">
                <div className="col-md-6  align-items-center">
                  <h1 className="pt-2 hero-h1">Where the Players Want to</h1>
                  <span className="hero-btn">
                    {" "}
                    <a href="/" className="hero-btn-1">
                      play
                    </a>
                  </span>
                  <p className="grey">Soon...</p>

                  <div>
                    <p className="hero-p">Connect With The Amazing Community</p>
                    <div className="hero-social">
                      <a
                        href="https://twitter.com/MetaballC"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href="https://t.me/metaballclub"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTelegram />
                      </a>
                      <a href="/">
                        <FaLinkedin />
                      </a>
                      <a href="/">
                        <FaGithub />
                      </a>
                    </div>
                    <div className="hero-buttons">
                      <a
                        href="https://bscscan.com/address/0xbacde2bb4adc1fe9fe84c560061e3ee23fc751e6#code"
                        target="_blank"
                        rel="noreferrer"
                        className="connect-2"
                      >
                        Contract
                      </a>
                      <a
                        href="https://ik.imagekit.io/cforcrypto/metaball/whitepaper_metaball_6.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1668616013406"
                        target="_blank"
                        rel="noreferrer"
                        className="connect-2"
                      >
                        Whitepaper
                      </a>
                      <a href="/" className="connect-2">
                        Audit
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                <div className="presale  sale-desktop ">
                    <div className="presale-box">
                      <h1>PRESALE - 1</h1>
                      <h1>1 MTB = 0.025 USD</h1>
                      <ProgressBar
                        completed={80}
                        className="wrappers"
                        barContainerClassName="containers"
                        completedClassName="barCompleted"
                        labelClassName="label"
                      />
                      <p>Sold- 1,000,000,0 / 3,000,000,00</p>
                      <p>Raised- 1,000,000,0 / 3,000,000,00</p>
                      <div className="presale-input d-flex">
                        <div className="mb-3">
                          
                          <input type="number"
                            className="form-control" name="BNB" id="" aria-describedby="helpId" placeholder="BNB"/>
                          
                        </div>
                        <div className="mb-3">
                          
                          <input type="number"
                            className="form-control form-control2" name="MTB" id="" aria-describedby="helpId" placeholder="MTB"/>
                          
                        </div>

                      </div>
                      <div className="presale-btn">
                      <a href="/">BUY MTB</a>
                        <a href="/" className="claim">CLAIM</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero;
