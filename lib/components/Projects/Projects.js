import React, { Fragment } from 'react';
import AnchorLink from '../AnchorLink';
import 'styles/projects.scss';

const Projects = ({ projectsList }) => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <Fragment>
        {projectsList.map(({ title, gitHubRepo, siteURL }) => (
          <div>
            <span>{title}</span>
            <span>
              <AnchorLink href={gitHubRepo}>Code</AnchorLink>
            </span>
            <span>
              <AnchorLink href={siteURL}>Live Site</AnchorLink>
            </span>
          </div>
        ))}
      </Fragment>
    </section>
  );
};

export default Projects;
