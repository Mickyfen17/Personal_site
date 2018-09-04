import React, { Component } from 'react';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import LoadingComponent from '../LoadingComponent';

const AsyncModal = LoadingComponent(() =>
  import(/* webpackChunkName: "reactModal" */ 'react-modal')
);

//as per http://reactcommunity.org/react-modal/accessibility/
const root = document.getElementById('application');

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      selectedProjectName: '',
    };
  }

  toggleModal = name => {
    if (!this.state.showModal) {
      this.setState({ showModal: true, selectedProjectName: name });
    } else {
      this.setState({ showModal: false });
    }
  };

  render() {
    const { showModal, selectedProjectName } = this.state;
    const { projectsList } = this.props;
    const projectToDisplay = projectsList.find(
      project => project.title === selectedProjectName
    );

    return (
      <section id="projects">
        <h2>Projects</h2>
        <ProjectList
          projectsList={projectsList}
          toggleModal={this.toggleModal}
        />
        <AsyncModal
          className="project-modal"
          isOpen={showModal}
          closeTimeoutMS={500}
          contentLabel="Project Details"
          appElement={root}
        >
          <ProjectDetails
            {...projectToDisplay}
            toggleModal={this.toggleModal}
          />
        </AsyncModal>
      </section>
    );
  }
}

export default Projects;
