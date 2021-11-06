import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import HijauDaun from "./img/portfolio/https-hijau-daun-netlify-app.png";
import PassGen from "./img/portfolio/Password-Generator.jpg";
import PassGenCover from "./img/portfolio/Password-Generator14x3.jpg";
import SolidAr from "./img/portfolio/SOLID_AR_AI.png";
import SovaLineup from "./img/portfolio/Sova-Lineup (1).png";
import SovaLineupCover from "./img/portfolio/Sova-LineupCover.png";
import Agency from "./img/portfolio/UnoPie- Design Agency.png";
import Valorant from "./img/portfolio/valorant-agent.png";
import Fade from "react-reveal/Fade";

const Work = () => {
  return (
    <>
      <section id="work" className="work-page py-5">
        <div className="container text-light">
          <Fade right cascade>
            <h1 className="text-center">Latest Work</h1>
            <div className="row">
              <div className="col">
                <p className="subtitle fs-5 my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Viverra justo nec ultrices dui sapien eget mi proin.
                </p>
              </div>
            </div>
          </Fade>

          <SimpleReactLightbox className="gallery">
            <SRLWrapper>
              <Fade bottom cascade>
                <div className="row lightbox">
                  <div className="pict col-lg-3 mb-3">
                    <a href={Valorant}>
                      <img src={Valorant} alt="Valorant Agent" />
                    </a>
                  </div>
                  <div className="pict col-lg-3 mb-3">
                    <a href={SolidAr}>
                      <img src={SolidAr} alt="Meubel Landing Page" />
                    </a>
                  </div>
                  <div className="col">
                    <div className="row h-100 lightbox">
                      <div className="pict box col-lg-6 mb-3">
                        <a href={PassGen}>
                          <img src={PassGenCover} alt="Password Generator" />
                        </a>
                      </div>
                      <div className="pict box col-lg-6 mb-3">
                        <a href={Agency}>
                          <img src={Agency} alt="Agency Website Landing Page" />
                        </a>
                      </div>
                      <div className="pict box col-lg-6 mb-3">
                        <a href={SovaLineup}>
                          <img src={SovaLineupCover} alt="Sova Lineup" />
                        </a>
                      </div>
                      <div className="pict box col-lg-6 mb-3">
                        <a href={HijauDaun}>
                          <img src={HijauDaun} alt="HijauDaun Agency" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row lightbox">
                  <div className="pict wide col-lg-6 mb-3">
                    <a href="https://cdn.dribbble.com/users/1726280/screenshots/10474951/creative_travel_website_design_4x.png">
                      <img src="https://cdn.dribbble.com/users/1726280/screenshots/10474951/creative_travel_website_design_4x.png" alt="Travel Web 1" />
                    </a>
                  </div>
                  <div className="pict wide col-lg-6">
                    <a href="https://cdn.dribbble.com/users/1726280/screenshots/9835041/media/8efb9adbe9e7356f130f4e21067f7eee.jpg?compress=1&resize=1200x900">
                      <img src="https://cdn.dribbble.com/users/1726280/screenshots/9835041/media/8efb9adbe9e7356f130f4e21067f7eee.jpg?compress=1&resize=1200x900" alt="Travel Web 2" />
                    </a>
                  </div>
                </div>
              </Fade>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </section>
    </>
  );
};

export default Work;
