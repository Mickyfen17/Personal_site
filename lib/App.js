import React, { Component } from 'react';
import Scroll from 'react-scroll';

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
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  };

  scrollToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  render() {
    const { projects, skills } = this.state;
    return (
      <div>
        <Header scrollToAbout={this.scrollToAbout} />
        <SkillsContext.Provider value={skills}>
          <About />
        </SkillsContext.Provider>
        <Projects projectsList={projects} />
        <Footer scrollToTop={this.scrollToTop} />
      </div>
    );
  }
}
