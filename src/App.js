import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

//Styling
import './App.css';

//Components
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import About from './components/about/About';

function App() {
  const [data, setData] = useState({ projects: [], isLoaded: false });
  const [about, setAbout] = useState({ about: [], isLoaded: false });
  const [clients, setClients] = useState({ clients: [], isLoaded: false });

  useEffect(() => {
    const fetchData = async () => {
      // const result = await axios.get(
      //   'http://giacomoboffo/wp-json/wp/v2/projects',
      // );

      const urlProjects = 'http://giacomoboffo/wp-json/wp/v2/projects';
      const urlAbout = 'http://giacomoboffo/wp-json/wp/v2/about';
      const urlClients = 'http://giacomoboffo/wp-json/wp/v2/clients'
      //if I want to access the media object, should be http://giacomoboffo/wp-json/wp/v2/media 
      const [resProjects, resAbout, resClients] = await Promise.all([
        axios(urlProjects),
        axios(urlAbout),
        axios(urlClients)
      ]);

      setData({ projects: resProjects.data, isLoaded: true });
      setAbout({ about: resAbout.data, isLoaded: true });
      setClients({ clients: resClients.data, isLoaded: true })
    };
    fetchData();

  }, []);

  console.log(clients)

  return (
    <div className="App">
      <Router>
      <Header />
        <Fragment>
        <Route exact path='/' component={() => <Projects data={data} about={about}/>} render={()=><Header></Header>}/>
        <Route exact path='/about' component={() => <About clients={clients}/>}/>
        </Fragment>
      </Router>

    </div>
  );
}

export default App;