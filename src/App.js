import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import PageDetail from "./page/PageDetail";

const app = () => {
  return (
    <>
        <section className="app-cl" id="app">
          <Router>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/portfolio/:title" exact component={PageDetail} />
            </Switch>
          </Router>
        </section>
    </>
  );
};

export default app;
