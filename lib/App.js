import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export const SkillsContext = React.createContext({
  skills: [],
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      skills: [],
    };

    // initiate smooth scroll polyfill for Safari/Edge etc
    smoothscroll.polyfill();
  }

  componentDidMount() {
    fetch('https://uq9jwb3puh.execute-api.us-east-2.amazonaws.com/PROD/my-data')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('API call returned with an error');
      })
      .then(data => {
        const { projectData, skillData } = data;
        this.setState({
          projects: [...projectData],
          skills: [...skillData],
        });
      })
      .catch(err => {
        throw new Error(
          'There has been a problem with your fetch call: ',
          err.message
        );
      });
  }

  scrollToAbout = () => {
    this.scrollEvent('#about');
  };

  scrollToTop = () => {
    this.scrollEvent('.main-macbook-img');
  };

  scrollEvent = el => {
    document.querySelector(el).scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    });
  };

  render() {
    const { projects, skills } = this.state;
    return (
      <React.Fragment>
        <Header scrollToAbout={this.scrollToAbout} />
        <SkillsContext.Provider value={skills}>
          <About />
        </SkillsContext.Provider>
        <Projects projectsList={projects} />
        <Footer scrollToTop={this.scrollToTop} />
      </React.Fragment>
    );
  }
}
