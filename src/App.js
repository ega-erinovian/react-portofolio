import React from "react";
import Home from "./Home";
import About from "./About";
import Exp from "./Exp";
import Work from "./Work";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChangePage from "./ChangePage";

const app = () => {
  return (
    <>
      <Router>
        <section className="app-cl" id="app">
          <ChangePage />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/experience" exact component={Exp} />
            <Route path="/work" exact component={Work} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </section>
      </Router>
    </>
  );
};

export default app;
