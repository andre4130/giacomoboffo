import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Styling
import './App.css';

//Components
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import About from './components/about/About';

function App() {
  const [data, setData] = useState({ projects: [], isLoaded: false });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://giacomoboffo/wp-json/wp/v2/projects',
      );

      setData({ projects: result.data, isLoaded: true });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Projects
        data={data}
      />
    </div>
  );
}

export default App;