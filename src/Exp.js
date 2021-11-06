import React from "react";
import Card from "./Card";
import Fade from "react-reveal/Fade";

const Exp = () => {
  const cardContent = [
    {
      // Asisten Lab
      year: "2021 - present",
      title: "Lab Assistant",
      event: 'UPN "Veteran" Yogyakarta',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Viverra justo nec ultrices dui sapien eget mi proin.",
    },
    {
      // SMA9EVENTS
      year: "2017 - 2019",
      title: "Publicity & Ticketing Staff",
      event: "SMA9EVENTS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Viverra justo nec ultrices dui sapien eget mi proin.",
    },
    {
      // IFOC
      year: "2021",
      title: "Design & Publicity Staff",
      event: "Informatics Online Cup (IFOC)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Viverra justo nec ultrices dui sapien eget mi proin.",
    },
  ];
  return (
    <>
      <section id="exp" className="exp-page py-5">
        <div className="container text-light">
          <Fade right cascade>
            <h1 className="text-center">Experience</h1>
            <div className="row">
              <div className="col">
                <p className="fs-6 my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Viverra justo nec ultrices dui sapien eget mi proin.
                </p>
              </div>
            </div>
          </Fade>
          <Fade right cascade>
            <div className="row">
              <div className="col-lg-4">
                <Card year={cardContent[0].year} title={cardContent[0].title} event={cardContent[0].event} desc={cardContent[0].desc} />
              </div>
              <div className="col-lg-4">
                <Card year={cardContent[1].year} title={cardContent[1].title} event={cardContent[1].event} desc={cardContent[1].desc} />
              </div>
              <div className="col-lg-4">
                <Card year={cardContent[2].year} title={cardContent[2].title} event={cardContent[2].event} desc={cardContent[2].desc} />
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Exp;
