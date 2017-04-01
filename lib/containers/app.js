import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Modal from 'react-modal'

// import Home from '../components/Home';
import ProjectDetails from '../components/ProjectDetails';
import ProjectList from '../Data/ProjectList';

import Scroll from 'react-scroll';

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';


export default class App extends Component {

  scrollToAbout() {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  }

  projectDetails(project) {
    const customStyles = { content: { backgroundColor: 'rgba(255, 255, 255, 0.9)' } };
    return (
      <Modal
       isOpen={ true }
       style={ customStyles }
       contentLabel='Project Details'
      >
        <ProjectDetails { ...project } />
      </Modal>
    );
  }

  render() {
    return (
      <div>
        <Route path='/project/:id' render={({ match }) => {
          const projectToDisplay = ProjectList.find(project => match.params.id === project.title);
          return (this.projectDetails(projectToDisplay));
          }
        } />
        <Header scrollToAbout={ () => this.scrollToAbout() } />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}
