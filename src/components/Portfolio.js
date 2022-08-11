import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Fade from "react-reveal/Fade";

// Import image
import GymLogo from "../assets/img/portfolio/golds-fitnesss-logo.webp";
import BookmarkLogo from "../assets/img/portfolio/logo-bookmark.webp";
import SovaLogo from "../assets/img/portfolio/sova-lineup-logo.webp";
import ValoLogo from "../assets/img/portfolio/valoagent-logo.webp";
import ZikrLogo from "../assets/img/portfolio/zikr-logo.webp";
import SNKRZLogo from "../assets/img/portfolio/SNKRZ-logo.webp";
import RumahwebLogo from "../assets/img/portfolio/rumahweb-logo.webp";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-page py-5 mb-5">
        <div className="container">
          <Fade right cascade>
            <h1 className="text-center mb-3">Portfolio</h1>
            <div className="row">
              <div className="col">
                <p className="subtitle fs-6 mb-5 text-center">
                  Here are some of my work since the first time i learn web development. These web was built using various web technologies and framework, such as bootstrap, React JS, etc. Not just front-end web, i also build some
                  full-stack web
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="row justify-content-center align-items-center portfolio-gallery">
                <div className="portfolio-card col-lg-3 col-md-6 text-center mb-5">
                  <a href="https://golds-fitness.netlify.app">
                      <img src={GymLogo} alt="golds-gym" />
                  </a>
                </div>
                <div className="portfolio-card col-lg-3 col-md-6 text-center mb-5">
                  <a href="https://bookmarkco.netlify.app">
                      <img src={BookmarkLogo} alt="bookmark" />
                  </a>
                </div>
                <div className="portfolio-card col-lg-3 col-md-6 text-center mb-5">
                  <a href="https://sova-lineup.netlify.app">
                      <img src={SovaLogo} alt="sova-lineup" />
                  </a>
                </div>
                <div className="portfolio-card col-lg-3 col-md-6 text-center mb-5">
                  <a href="https://valoagent.netlify.app">
                      <img src={ValoLogo} alt="valo-agent" />
                  </a>
                </div>
                <div className="portfolio-card col-lg-3 col-md-6 text-center mb-5">
                  <a href="https://zikr-app.netlify.app">
                      <img src={ZikrLogo} alt="zikr" />
                  </a>
                </div>
                <div className="portfolio-card col-lg-3 col-md-6 text-center mb-5">
                  <a href="https://snkrz.netlify.app">
                      <img src={SNKRZLogo} alt="SNKRZ" />
                  </a>
                </div>
                <div className="portfolio-card col-lg-3 col-md-6 text-center mb-5">
                  <a href="http://sismakar-kprumahweb.my.id/">
                      <img src={RumahwebLogo} alt="rumahweb"/>
                  </a>
                </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
