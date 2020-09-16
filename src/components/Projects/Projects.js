import React from 'react';
import AnchorLink from '../AnchorLink';
import NeonContentWrapper from '../NeonContentWrapper';
import 'styles/projects.scss';

const Projects = ({ projectsList }) => {
  return (
    <section id="projects">
      <NeonContentWrapper title="Projects">
        {projectsList.map(({ title, gitHubRepo, siteURL }) => (
          <div className="project">
            <h3>{title}</h3>
            <div>
              <AnchorLink type="project-link" href={gitHubRepo}>
                Code
              </AnchorLink>
              <AnchorLink type="project-link" href={siteURL}>
                Live Site
              </AnchorLink>
            </div>
          </div>
        ))}
      </NeonContentWrapper>
    </section>
  );
};

export default Projects;
