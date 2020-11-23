import './App.css';
import React from 'react';
import { axios } from 'axios';
import { router } from 'react-router';

//Components
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Projects/>
      </header>
    </div>
  );
}

export default App;
