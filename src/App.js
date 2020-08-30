import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const useFetch = url => {
  const [apiData, setApiData] = useState({ skills: [], projects: [] });

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const { projectData, skillData } = await response.json();
      setApiData({ projects: projectData, skills: skillData });
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);
  return apiData;
};

const App = () => {
  const { projects, skills } = useFetch(
    'https://uq9jwb3puh.execute-api.us-east-2.amazonaws.com/PROD/my-data'
  );

  return (
    <React.Fragment>
      <Header />
      <About skills={skills} />
      <Projects projectsList={projects} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
