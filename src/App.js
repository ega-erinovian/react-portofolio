import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Exp from "./components/Exp";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigasi from "./components/Navigasi";
import Footer from "./components/Footer";
import Skill from "./components/Skill";

const app = () => {
  return (
    <>
        <section className="app-cl" id="app">
          <Navigasi />
          <Home />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        {/* <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/experience" exact component={Exp} />
            <Route path="/work" exact component={Work} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router> */}
        </section>
    </>
  );
};

export default app;
