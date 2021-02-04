import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

//Styling
import './App.css';

//Components
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Testing from './components/testing/Testing';

function App() {

  const [data, setData] = useState({ projects: [], page: "1", totalPages: '', isLoaded: false });
  const [events, setEvents] = useState({ events: [], page: "1", totalPages: '', isLoaded: false });
  const [clients, setClients] = useState({ clients: [], page: "1", totalPages: '', isLoaded: false });
  const [experience, setExperience] = useState({ experience: [], page: "1", totalPages: '', isLoaded: false });

  useEffect(() => {
    const fetchData = async () => {
      const urlProjects = `http://giacomoboffoapi/wp-json/wp/v2/projects?page=${data.page}`;
      const urlEvents = `http://giacomoboffoapi/wp-json/wp/v2/events_prizes?page=${events.page}`;
      const urlExperience = `http://giacomoboffoapi/wp-json/wp/v2/experience?page=${experience.page}`;
      const urlClients = `http://giacomoboffoapi/wp-json/wp/v2/clients?page=${clients.page}`;

      //if I want to access the media object, should be http://giacomoboffoapi/wp-json/wp/v2/media 

      const [resProjects, resEvents, resClients, resExperience] = await Promise.all([
        axios(urlProjects),
        axios(urlEvents),
        axios(urlClients),
        axios(urlExperience)
      ]);

      // const res = await axios.get('http://giacomoboffoapi/wp-json/wp/v2/experience', {headers: {'Access-Control-Allow-Origin': 'http://localhost:3000','total_pages':'X-WP-TotalPages'}});

      setData({ ...data, projects: resProjects.data, totalPages: resProjects.headers['x-wp-totalpages'], isLoaded: true });
      setEvents({ ...events, events: resEvents.data, totalPages: resEvents.headers['x-wp-totalpages'], isLoaded: true });
      setClients({...clients, clients: resClients.data, totalPages: resClients.headers['x-wp-totalpages'], isLoaded: true });
      setExperience({...experience, experience: resExperience.data, totalPages: resExperience.headers['x-wp-totalpages'], isLoaded: true})   

    };
    fetchData();

  }, []);

// console.log( data, clients, experience, events)

  return (
    <div className="App">
      {/* <Testing/> */}
      <Router>
        {data.isLoaded === false ? null : <Header />}
        <Fragment>
        <Route exact path='/' component={() => <Projects data={data}/>} render={()=><Header></Header>}/>
        <Route exact path='/about' component={() => <About clients={clients} experience={experience} events={events}/>}/>
        </Fragment>
        <Testing></Testing>
      </Router>
    </div>
  );
}

export default App;