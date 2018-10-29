import React, { useState, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export const SkillsContext = React.createContext({
  skills: [],
});

// initiate smooth scroll polyfill for Safari/Edge etc
smoothscroll.polyfill();

const App = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('https://uq9jwb3puh.execute-api.us-east-2.amazonaws.com/PROD/my-data')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('API call returned with an error');
      })
      .then(data => {
        const { projectData, skillData } = data;
        setProjects(projectData);
        setSkills(skillData);
      })
      .catch(err => {
        throw new Error(
          'There has been a problem with your fetch call: ',
          err.message
        );
      });
  }, []);

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
      <SkillsContext.Provider value={skills}>
        <About />
      </SkillsContext.Provider>
      <Projects projectsList={projects} />
      <Footer scrollToTop={() => scrollEvent('.main-macbook-img')} />
    </React.Fragment>
  );
};

export default App;
