import React from "react";
import Fade from "react-reveal/Fade";

// Import img
import ProfilePic from "../assets/img/profile-pic.webp";
import Skill from "./Skill";

const About = () => {
  return (
    <>
      <section id="about" className="about-page py-5 mb-5">
        <div className="container h-100">
          <Fade right cascade>
            <h1 className="text-center mb-3">About</h1>
            <p className="text-center fs-6 mb-5">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </Fade>
          <div className="row">
            <Fade right cascade>
              <div className="col-lg-4">
                <img src={ProfilePic} alt="profile-pic" loading="lazy" className="mb-3"/>
              </div>
              <div className="col">
                <h3><strong>Full-Stack Web Developer</strong></h3>
                <p className="fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li className='mb-4'><strong>Age:</strong> <span>30</span></li>
                      <li className='mb-4'><strong>Phone:</strong> <span>+123 456 7890</span></li>
                      <li className='mb-4'><strong>City:</strong> <span>New York, USA</span></li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li className='mb-4'><strong>Degree:</strong> <span>Master</span></li>
                      <li className='mb-4'><strong>PhEmailone:</strong> <span>email@example.com</span></li>
                      <li className='mb-4'><strong>Freelance:</strong> <span>Available</span></li>
                    </ul>
                  </div>
                </div>
                <p className="fs-6">Here are some technologies that i use the most.</p>
                <Skill />
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
