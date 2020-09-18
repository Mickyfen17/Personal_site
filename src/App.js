import React, { Fragment, useState, useEffect } from 'react';
import { NeonLightsContextProvider } from './context/NeonLightsContext';
import NeonHeader from './components/NeonHeader';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Toggle from './components/Toggle';

const useFetch = url => {
  const [apiData, setApiData] = useState({ skills: null, projects: null });

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
  const [lightsOn, toggleLights] = useState(true);
  const { projects, skills } = useFetch(
    'https://uq9jwb3puh.execute-api.us-east-2.amazonaws.com/PROD/my-data'
  );

  return (
    <Fragment>
      {projects && skills && (
        <NeonLightsContextProvider lightsOn={lightsOn}>
          <Toggle lightsOn={lightsOn} toggleLights={toggleLights} />
          <NeonHeader>Mike Fenwick</NeonHeader>
          <About skills={skills} />
          <Projects projectsList={projects} />
          <Footer />
        </NeonLightsContextProvider>
      )}
    </Fragment>
  );
};

export default App;
