import React from 'react';
import Project from './Project';

const ProjectList = ({ toggleModal, projectsList }) => (
  <div className="projects-wrapper">
    {projectsList.map(eachProject => (
      <Project
        key={eachProject.title}
        toggleModal={toggleModal}
        {...eachProject}
      />
    ))}
  </div>
);

export default ProjectList;
