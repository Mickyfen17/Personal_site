import React from 'react';
import AnchorLink from '../AnchorLink';
import NeonContentWrapper from '../NeonContentWrapper';
import 'styles/projects.scss';

const Projects = ({ projectsMap }) => (
  <section id="projects">
    <NeonContentWrapper title="Projects">
      {Array.from(projectsMap).map(([key, { title, gitHubRepo, siteURL }]) => (
        <div key={key} className="project">
          <h3>{title}</h3>
          <div>
            <AnchorLink type="project-link" href={gitHubRepo}>
              Code
            </AnchorLink>
            <AnchorLink type="project-link" href={siteURL}>
              Live Site
            </AnchorLink>
            <button onClick={() => console.log(key)}>open project</button>
          </div>
        </div>
      ))}
    </NeonContentWrapper>
  </section>
);

export default Projects;
