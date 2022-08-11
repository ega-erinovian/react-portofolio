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
        <section id="skill" className="skill-section">
            <div className="container">
                <Fade right cascade>
                    <div className="skill-grid">
                        <div className="text-center">
                            <img src={HTML} alt='HTML'/>
                        </div>
                        <div className="text-center">
                            <img src={CSS} alt='CSS'/>
                        </div>
                        <div className="text-center">
                            <img src={JavaScript_Icon} alt='Javascript'/>
                        </div>
                        <div className="text-center">
                            <img src={ReactJS_Icon} alt='ReactJS'/>
                        </div>
                        <div className="text-center">
                            <img src={PHP_Icon} alt='PHP'/>
                        </div>
                        <div className="text-center">
                            <img src={Python_Icon} alt='Python'/>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    </>
  )
}

export default Skill