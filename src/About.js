import React from "react";
import Potrait from "./img/about-potrait.png";
import Handsign from "./img/handsign.png";
import Button from "react-bootstrap/Button";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      <section id="about" className="about-page">
        <div className="container text-light h-100">
          <Fade right>
            <div className="row justify-content-center">
              <div className="col">
                <img src={Potrait} className="potrait" alt="Ega Putra" />
              </div>
            </div>
          </Fade>
          <Fade right delay={150}>
            <div className="row">
              <div className="col">
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Viverra justo nec ultrices dui sapien eget mi proin. Sollicitudin
                  nibh sit amet commodo nulla facilisi nullam vehicula. Eget nunc scelerisque viverra mauris in aliquam sem. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Varius sit amet mattis vulputate enim. Quam
                  vulputate dignissim suspendisse in est. Phasellus vestibulum lorem sed risus ultricies tristique. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Etiam non quam lacus suspendisse faucibus interdum posuere
                  lorem ipsum. Volutpat ac tincidunt vitae semper. Senectus et netus et malesuada fames ac turpis. Et netus et malesuada fames ac.
                </p>
              </div>
            </div>
          </Fade>
          <Fade right delay={300}>
            <div className="row justify-content-center">
              <div className="col mb-4 text-center">
                <img src={Handsign} className="handsign" alt="signature" />
              </div>
            </div>
          </Fade>
          <Fade right delay={450} cascade>
            <div className="row justify-content-center text-center my-3 abt-btn pb-5">
              <div className="col text-end">
                <Button> Contact Me </Button>
              </div>
              <div className="col text-start fw-bolder">
                <Button variant="outline-primary">Download CV</Button>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default About;
