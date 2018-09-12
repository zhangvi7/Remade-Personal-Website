import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage.jsx';
import AboutMe from './about.jsx';
import Contact from './contact.jsx';
import Projects from './projects.jsx';
import Resume from './resume.jsx';
import Homepage from './homepage.jsx';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/about" component={LandingPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
