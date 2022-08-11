import React from 'react'
import { Instagram, Linkedin, Github, Globe2 } from "react-bootstrap-icons";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <section id="footer" className="footer-section py-5">
        <div className="container">
            <div className="text-center d-flex flex-column">
              <Fade left cascade>
                <h1 className="mb-3">Ega Erinovian</h1>
                <div className="footer-icon d-flex justify-content-center mb-5">
                  <Fade left cascade>
                    <a className="me-3" href="https://www.instagram.com/egaerinovian/" target="_blank" rel="noreferrer">
                      <Instagram className="link m-2" size={28} />
                    </a>
                    <a className="me-3" href="https://www.linkedin.com/in/ega-erinovian-megananda-putra-562387176/" target="_blank" rel="noreferrer">
                      <Linkedin className="link m-2" size={28} />
                    </a>
                    <a className="me-3" href="https://github.com/ega-erinovian" target="_blank" rel="noreferrer">
                      <Github className="link m-2" size={28} />
                    </a>
                    <a className="me-3" href="https://app.netlify.com/teams/egaputra69/overview" target="_blank" rel="noreferrer">
                      <Globe2 className="link m-2" size={28} />
                    </a>
                  </Fade>
                </div>
                <p className="fs-6">&copy; Copyright <strong><span>Ega-Erinovian</span></strong>. All Rights Reserved</p>
              </Fade>
            </div>
        </div>
    </section>
  )
}

export default Footer