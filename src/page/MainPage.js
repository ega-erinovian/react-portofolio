import React from 'react'
import Navigasi from "../components/Navigasi";
import Home from "../components/Home"
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <>
        <Navigasi />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default MainPage