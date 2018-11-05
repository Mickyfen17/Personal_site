import React, { lazy, Suspense, useState } from 'react';
import ProjectList from './ProjectList';
import LoadingComponent from '../LoadingComponent';
import Spinner from '../LoadingComponent/Spinner';
import 'styles/projects.scss';

const ProjectDetails = lazy(() =>
  import(/* webpackChunkName: "projectDetails", webpackPrefetch: true */ './ProjectDetails')
);
const AsyncModal = LoadingComponent(() =>
  import(/* webpackChunkName: "reactModal" */ 'react-modal')
);
//as per http://reactcommunity.org/react-modal/accessibility/
const root = document.getElementById('application');

const populateModal = initialValue => {
  const [show, toggleValue] = useState(initialValue);
  const [selectedProject, selectProject] = useState('');

  const toggle = project => {
    const stateProject = typeof project === 'string' ? project : '';
    toggleValue(nextVal => !nextVal);
    selectProject(stateProject);
  };
  return [show, toggle, selectedProject];
};

const Projects = ({ projectsList }) => {
  const [show, toggle, selectedProject] = populateModal(false);
  const projectToDisplay = projectsList.find(
    project => project.title === selectedProject
  );

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ProjectList projectsList={projectsList} toggleModal={toggle} />
      <AsyncModal
        className="project-modal"
        isOpen={show}
        closeTimeoutMS={500}
        contentLabel="Project Details"
        appElement={root}
        onRequestClose={toggle}
      >
        <Suspense fallback={<Spinner fillColor="#000" />}>
          {projectToDisplay && (
            <ProjectDetails {...projectToDisplay} toggleModal={toggle} />
          )}
        </Suspense>
      </AsyncModal>
    </section>
  );
};

export default Projects;
