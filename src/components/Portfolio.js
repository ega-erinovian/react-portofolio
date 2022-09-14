import React from "react";
import Fade from "react-reveal/Fade";
import { portfolioData } from "../portfolioDB";
import { Bookmark, GoldsGym, SismakarRumahweb, Snkrz, SovaLineup, Valoagent, Zikr, GPT3} from "./importsPortfolio";

const Portfolio = () => {

  const img = [GoldsGym, Bookmark, SovaLineup, Valoagent, Zikr, Snkrz, SismakarRumahweb, GPT3]

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
                {portfolioData && portfolioData.map((data, index) => {
                  return(
                    <div className={'portfolio-card col-lg-3 col-md-6 text-center mb-5 ' + data.title.replace(/\s/g, "")}>
                      <a href={"/portfolio/"+data.title.replace(/\s/g, "")} key={index}>
                          <img src={img[index]} alt={data.title} loading="lazy"/>
                      </a>
                    </div>
                  )
                })}
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
