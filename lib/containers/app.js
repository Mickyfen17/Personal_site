import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Modal from 'react-modal';

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      projectToDisplay: '',
      projects: [],
      skills: [],
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.scrollToAbout = this.scrollToAbout.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
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

  scrollToAbout() {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  }

  scrollToTop() {
    Scroll.animateScroll.scrollToTop();
  }

  projectDetails() {
    const projectToDisplay = this.state.projects.find(
      project => project.title === this.state.projectToDisplay
    );
    return (
      <Modal
        className="project-modal"
        isOpen={this.state.modalOpen}
        contentLabel="Project Details"
      >
        <ProjectDetails {...projectToDisplay} toggleModal={this.toggleModal} />
      </Modal>
    );
  }

  toggleModal(name) {
    if (!this.state.modalOpen) {
      this.setState({ modalOpen: true, projectToDisplay: name });
    } else {
      this.setState({ modalOpen: false, projectToDisplay: '' });
    }
  }

  render() {
    const { projects, skills } = this.state;
    return (
      <div>
        {this.projectDetails()}
        <Header scrollToAbout={this.scrollToAbout} />
        <About skillsList={skills} />
        <Projects toggleModal={this.toggleModal} projectsList={projects} />
        <Footer scrollToTop={this.scrollToTop} />
      </div>
    );
  }
}
