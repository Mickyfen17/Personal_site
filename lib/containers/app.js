import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Modal from 'react-modal'

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer';
import ProjectList from '../Data/ProjectList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      projectToDisplay: '',
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  scrollToAbout() {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  }

  projectDetails() {
    const projectToDisplay = ProjectList.find(project =>
      project.title === this.state.projectToDisplay,
    );
    return (
      <Modal
        className='project-modal'
        isOpen={ this.state.modalOpen }
        contentLabel='Project Details'
      >
        <ProjectDetails { ...projectToDisplay } toggleModal={ this.toggleModal } />
      </Modal>
    );
  }

  toggleModal(name) {
    if(!this.state.modalOpen) {
      this.setState({ modalOpen: true, projectToDisplay: name });
    } else {
      this.setState({ modalOpen: false, projectToDisplay: '' });
    }
  }

  render() {
    return (
      <div>
        { this.projectDetails() }
        <Header scrollToAbout={ () => this.scrollToAbout() } />
        <About />
        <Projects toggleModal={ this.toggleModal }/>
        <Footer />
      </div>
    );
  }
}
