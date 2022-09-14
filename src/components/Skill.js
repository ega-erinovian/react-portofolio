import React from 'react'
import Fade from "react-reveal/Fade";

// Import img
import HTML from "../assets/img/skills/html_icon-col.png";
import CSS from "../assets/img/skills/css_icon_col.png";
import JavaScript_Icon from "../assets/img/skills/javascript_icon_col.png";
import ReactJS_Icon from "../assets/img/skills/react_icon_col.png";
import PHP_Icon from "../assets/img/skills/php_icon_col.png"
import Python_Icon from "../assets/img/skills/python_icon_col.png";

const Skill = () => {
  return (
    <>
        <section id="skill" className="skill-section py-5">
            <div className="container d-flex flex-column align-items-center">
                <Fade right cascade>
                    <h1>Tech Stack</h1>
                    <p className="fs-6 text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="skill-grid">
                        <div className="text-center">
                            <img src={HTML} alt='HTML' loading='lazy'/>
                            <p>HTML5</p>
                        </div>
                        <div className="text-center">
                            <img src={CSS} alt='CSS' loading='lazy'/>
                            <p>CSS3</p>
                        </div>
                        <div className="text-center">
                            <img src={JavaScript_Icon} alt='Javascript' loading='lazy'/>
                            <p>Javascript</p>
                        </div>
                        <div className="text-center">
                            <img src={ReactJS_Icon} alt='ReactJS' loading='lazy'/>
                            <p>React JS</p>
                        </div>
                        <div className="text-center">
                            <img src={PHP_Icon} alt='PHP' loading='lazy'/>
                            <p>PHP</p>
                        </div>
                        <div className="text-center">
                            <img src={Python_Icon} alt='Python' loading='lazy'/>
                            <p>Python</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    </>
  )
}

export default Skill