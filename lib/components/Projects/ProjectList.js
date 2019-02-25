import React, { memo } from 'react';
import Project from './Project';

const ProjectList = ({ toggleModal, projectsList }) => {
  return (
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
};

const areEqual = (prevProps, nextProps) => {
  // experimental hooks reduces the effectiveness of PureComponent and React.memo
  // so preventing render using additional method linke shouldComponentUpdate
  return prevProps.projectsList.length === nextProps.projectsList.length;
};

export default memo(ProjectList, areEqual);
