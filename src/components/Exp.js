import React, { useState } from "react";
import Card from "./Card";
import Fade from "react-reveal/Fade";
import { experienceData } from "../expDB.js"

const Exp = () => {
  const [expData] = useState(experienceData)
  
  function checkWork(exp) {
    return exp.type === 'work'
  }

  return (
    <>
      <section id="experience" className="exp-page py-5">
        <div className="container text-light">
          <Fade right cascade>
            <h1 className="text-center mb-3">Experience</h1>
            <div className="row">
              <div className="col">
                <p className="mb-5 text-center fs-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Viverra justo nec ultrices dui sapien eget mi proin.
                </p>
              </div>
            </div>
          </Fade>
          <Fade right cascade>
            <div className="row justify-content-center">
              { expData && expData.filter(checkWork).map((exp, index) => (
                <div key={index} className="col-lg-4 mb-4">
                  <Card year={exp.year} title={exp.title} event={exp.event} desc={exp.desc} />
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Exp;
