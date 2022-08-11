import React from "react";
import Potrait from "../assets/img/BG-1-col.png";
import Typewriter from "typewriter-effect";
import { Instagram, Linkedin, Github, Globe2 } from "react-bootstrap-icons";
import Fade from "react-reveal/Fade";
import "boxicons";

const Home = () => {
  return (
    <>
      <section id="home" className="home">
        <div className="container h-100">
          <Fade right>
            <img src={Potrait} className="potrait" alt="Ega Putra" />
          </Fade>
          <div className="row align-items-center title-container" style={{ height: '100vh' }}>
            <div className="col-lg-6">
              <Fade left cascade>
                <h1>Ega Erinovian</h1>
                <p className="text-primary fs-4 d-flex"><strong className="me-2">I'm </strong> 
                  <Typewriter
                    options={{
                      strings: ["Computer Science Student", "Full-Stack Web Developer", "Web Designer"],
                      autoStart: true,
                      loop: true,
                      delay: "75",
                    }}
                  />
                </p>
              </Fade>
              <div className="btn-contact">
                <Fade left cascade>
                  <a className="text-light me-3" href="https://www.instagram.com/egaerinovian/" target="_blank" rel="noreferrer">
                    <Instagram className="link m-2" size={28} />
                  </a>
                  <a className="text-light me-3" href="https://www.linkedin.com/in/ega-erinovian-megananda-putra-562387176/" target="_blank" rel="noreferrer">
                    <Linkedin className="link m-2" size={28} />
                  </a>
                  <a className="text-light me-3" href="https://github.com/ega-erinovian" target="_blank" rel="noreferrer">
                    <Github className="link m-2" size={28} />
                  </a>
                  <a className="text-light me-3" href="https://app.netlify.com/teams/egaputra69/overview" target="_blank" rel="noreferrer">
                    <Globe2 className="link m-2" size={28} />
                  </a>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
