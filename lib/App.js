import React, { useState, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

// initiate smooth scroll polyfill for Safari/Edge etc
smoothscroll.polyfill();

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

  const scrollEvent = el => {
    document.querySelector(el).scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    });
  };

  return (
    <React.Fragment>
      <Header scrollToAbout={() => scrollEvent('#about')} />
      <About skills={skills} />
      <Projects projectsList={projects} />
      <Footer scrollToTop={() => scrollEvent('.main-macbook-img')} />
    </React.Fragment>
  );
};

export default App;
