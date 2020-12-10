import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Styling
import './App.css';

//Data 

import { projects } from './data/projects';
import { experience } from './data/experience';
import { prizes } from './data/prizes';
import { clients } from './data/clients'

//Components
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import About from './components/about/About';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Fragment>
          <Route exact path='/' component={() => <Projects data={projects} />} render={() => <Header></Header>} />
          <Route exact path='/about' component={() => <About clients={clients} experience={experience} prizes={prizes} />} />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;