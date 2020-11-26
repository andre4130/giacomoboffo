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

  // useEffect(() => {
  //   const currentPath = location.pathname;

  //   console.log(currentPath)
  // }, [location]);

  const [data, setData] = useState({ projects: [], isLoaded: false });
  const [about, setAbout] = useState({ about: [], isLoaded: false });
  const [clients, setClients] = useState({ clients: [], isLoaded: false });
  const [experience, setExperience] = useState({ experience: [], isLoaded: false });


  useEffect(() => {
    const fetchData = async () => {
      const urlProjects = 'http://giacomoboffo/wp-json/wp/v2/projects';
      const urlAbout = 'http://giacomoboffo/wp-json/wp/v2/about';
      const urlExperience = 'http://giacomoboffo/wp-json/wp/v2/experience';
      const urlClients = 'http://giacomoboffo/wp-json/wp/v2/clients?page=1'
      const urlClients2 = 'http://giacomoboffo/wp-json/wp/v2/clients?page=2'

      //if I want to access the media object, should be http://giacomoboffo/wp-json/wp/v2/media 

      const [resProjects, resAbout, resClients, resClients2, resExperience] = await Promise.all([
        axios(urlProjects),
        axios(urlAbout),
        axios(urlClients),
        axios(urlClients2),
        axios(urlExperience)
      ]);

      // const res = await axios.get('http://giacomoboffo/wp-json/wp/v2/experience', {headers: {'Access-Control-Allow-Origin':'*','total_pages':'X-WP-TotalPages'}});
      // console.log(res.data.headers['total-pages'])

      setData({ projects: resProjects.data, isLoaded: true });
      setAbout({ about: resAbout.data, isLoaded: true });
      setClients({...clients, clients: resClients.data, isLoaded: true });
      setClients({...clients, clients: resClients2.data, isLoaded: true });
      setExperience({experience: resExperience.data, isLoaded: true})
    };
    fetchData();

  }, []);

  return (
    <div className="App">
      <Router>
        {data.isLoaded === false ? null : <Header />}
        <Fragment>
        <Route exact path='/' component={() => <Projects data={data} about={about}/>} render={()=><Header></Header>}/>
        <Route exact path='/about' component={() => <About clients={clients} experience={experience}/>}/>
        </Fragment>
      </Router>

    </div>
  );
}

export default App;