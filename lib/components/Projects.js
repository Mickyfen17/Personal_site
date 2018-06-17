import React from 'react';
import Thumbnail from './Thumbnail';

const Projects = ({ toggleModal, projectsList }) => {
  const allProjects = projectsList.map(project => {
    const { title, image, gitHubRepo, siteURL, icons } = project;
    return (
      <article className="each-project" key={title}>
        <Thumbnail
          classNames="project-image"
          imageId={image}
          alt={`${title} project`}
        />
        <div className="article-layer">
          <h3>{title}</h3>
          <a href={gitHubRepo} target="_blank" title="Github Repo">
            <img
              className="project-icons"
              src={icons.git}
              alt="icon of github cat"
            />
          </a>
          <button className="project-button" onClick={() => toggleModal(title)}>
            More Details
          </button>
          <a href={siteURL} target="_blank" title="Website">
            <img
              className="project-icons"
              src={icons.site}
              alt="icon of laptop"
            />
          </a>
        </div>
      </article>
    );
  });

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-wrapper">{allProjects}</div>
    </section>
  );
};

export default Projects;
