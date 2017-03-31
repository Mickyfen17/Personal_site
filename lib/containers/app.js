import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import ProjectDetails from '../components/ProjectDetails';

import ProjectList from '../Data/ProjectList';
import { Route } from 'react-router-dom';


export default class App extends Component {

  scrollToAbout() {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  }

  render() {
    return (
      <div>
        <Header scrollToAbout={ () => this.scrollToAbout() } />
        <About />
        <Projects />
        <Route path='/project/:id' render={({ match }) => {
          const projectToDisplay = ProjectList.find(project => match.params.id === project.title);
          return <ProjectDetails { ...projectToDisplay } />
        }
      } />
      </div>
    );
  }
}
