import React from "react";
import Lines from "../../assets/Biggreyline.png";
import "./Team.css";

function Teams() {
  return (
    <section className="team" id="team">
      <div class="container text-center">
        <h1 className="team-h1">Teams</h1>

        <p>The People Behind The Movement</p>
      </div>
      <div class="container">
        <div className="side-4">&nbsp;</div>
        <div
          class="row justify-content-center align-items-center g-2"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div className="col-md-3 col-6">
            <div className="team-box text-center">
              <img
                src="https://ik.imagekit.io/cforcrypto/metaball/teams/3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668600189889"
                alt=""
              />
              <h2>John Slew </h2>
              <span>CEO</span>
              <p>
                Having 15 years experience in technology and gaming industry.
                His contribution to gaming industry is tremendous. His passion
                in gaming brings unique experiences to metaverse
              </p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="team-box text-center">
              <img
                src="https://ik.imagekit.io/cforcrypto/metaball/teams/1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668600190037"
                alt=""
              />
              <h2>Rohit singh</h2>
              <span>Designer</span>
              <p>
                He has 4 years experience in designing . His passionate and
                creative approach builds unique concepts. He is creative minded
                and on course to deliver a project that exceeds all expectations
                .
              </p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="team-box text-center">
              <img
                src="https://ik.imagekit.io/cforcrypto/metaball/teams/2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668600190154"
                alt=""
              />
              <h2>Humaira Sheik</h2>
              <span>Marketing</span>
              <p>
                is a Marketing & Socials expert within the Digital marketing
                space . Her involvement with crypto exceeds 3 years and has
                the required skills to expose thousands of people worldwide with
                his unique marketing skills
              </p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="team-box text-center">
              <img
                src="https://ik.imagekit.io/cforcrypto/metaball/teams/4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668612845915"
                alt=""
              />
              <h2>Aditya kumar</h2>
              <span>Developer</span>
              <p>
                As an experienced fullstack developer I've worked in the Web,
                Blockchain for 4 years.I built dozens of
                modern and professional platforms which are making profits for
                several companies worldwide. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container team-low">
        <img src={Lines} alt="" className="line-2" />
      </div>
    </section>
  );
}

export default Teams;
