import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Scroll from 'react-scroll';
import Modal from 'react-modal'

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer';
import ProjectList from '../Data/ProjectList';

export default class App extends Component {

  scrollToAbout() {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  }

  projectDetails(project) {
    return (
      <Modal
        className='project-modal'
        isOpen={ true }
        contentLabel='Project Details'
      >
        <ProjectDetails { ...project } />
      </Modal>
    );
  }

  render() {
    return (
      <div>
        <Route path='/project/:id' render={ ({ match }) => {
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
