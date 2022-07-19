import React from 'react'
import { Person, Clock, FileEarmark, Envelope, List } from "react-bootstrap-icons";

const Navigasi = () => {
  return (
    <>
        
        <i class="mobile-nav-toggle d-xl-none text-primary" onClick={() => {
            const body = document.querySelector('body')
            body.classList.toggle('mobile-nav-active')
        }}>
            <List />
        </i>
        <header id="header" class="d-flex flex-column justify-content-center">
            <nav id="navbar" class="navbar nav-menu">
                <ul>
                    <li><a href='#home' class="nav-link scrollto active"><strong className="fs-2">E</strong><span>Home</span></a></li>
                    <li><a href="#about" class="nav-link scrollto"><i><Person/></i><span>About</span></a></li>
                    <li><a href="#portfolio" class="nav-link scrollto"><i><FileEarmark/></i> <span>Portfolio</span></a></li>
                    <li><a href="#contact" class="nav-link scrollto"><i><Envelope/></i><span>Contact</span></a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Navigasi