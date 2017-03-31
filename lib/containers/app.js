import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Scroll from 'react-scroll';

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import ProjectDetails from '../components/ProjectDetails';
import ProjectList from '../Data/ProjectList';


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
      <Footer />
      </div>
    );
  }
}
