import React, { Fragment, useState, useEffect } from 'react';
import NeonHeader from './components/NeonHeader';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
  const { projects, skills } = useFetch(
    'https://uq9jwb3puh.execute-api.us-east-2.amazonaws.com/PROD/my-data'
  );

  return (
    <Fragment>
      {projects && skills && (
        <React.Fragment>
          <NeonHeader>Mike Fenwick</NeonHeader>
          <About skills={skills} />
          <Projects projectsList={projects} />
          <Footer />
        </React.Fragment>
      )}
    </Fragment>
  );
};

export default App;
