import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

const App = () => {
  return (
    <Router>
      <Route path="/:page" component={Header} />
      <Route exact path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
