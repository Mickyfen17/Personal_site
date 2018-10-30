import React from 'react';
import Project from './Project';

const ProjectList = ({ toggleModal, projectsList }) => (
  <section className="projects-wrapper">
    {projectsList.map(eachProject => (
      <Project
        key={eachProject.title}
        toggleModal={toggleModal}
        {...eachProject}
      />
    ))}
  </section>
);

export default ProjectList;
