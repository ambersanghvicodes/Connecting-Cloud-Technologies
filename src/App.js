import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";

import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AgencyLandingPage from "demos/AgencyLandingPage.js";
import CCLandingPage from "demos/CCLandingPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "pages/AboutUs";
import HomePage from "pages/HomePage";
import BlogIndex from "pages/BlogIndex";
import GPScripts from './pages/GPScripts';
import BlogDetail from './pages/BlogDetail';
import Slider from './components/headers/slider';
import ServicePage from './demos/ServicePage';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* <HomePage /> */}
          {/* <AgencyLandingPage /> */}
          <CCLandingPage />
          {/* <Slider/>
          <>sahjbdsas</> */}
        </Route>
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/scripts" component={GPScripts} />
        <Route exact path="/blogs" component={BlogIndex} />
        <Route exact path="/blogs/:title" component={BlogDetail} />
        {/* <Route exact path="/services" component={ServicePage} /> */}
      </Switch>
    </Router>
  );
}