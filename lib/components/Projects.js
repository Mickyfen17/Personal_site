import React from 'react';
import ProjectList from '../Data/ProjectList'

const Projects = ({ toggleModal }) => {

  const allProjects = ProjectList.map((project, i) => {
    const { title, image, gitHubRepo, siteURL, icons } = project;
    return (
      <article className='each-project' key={i}>
        <img
          className='project-image'
          src={ image }
          alt={`Picture of my ${title} project`}
        />
        <div className='article-layer'>
          <h3>{ title }</h3>
          <a href={ gitHubRepo } target='_blank'>
            <img
              className='project-icons'
              src={ icons.git }
              alt='icon of github cat'
            />
          </a>
          <button
            className='project-button'
            onClick={ () => toggleModal(title) }>
            More Details
          </button>
          <a href={ siteURL } target='_blank'>
            <img
              className='project-icons'
              src={ icons.site }
              alt='icon of laptop'
            />
          </a>
        </div>
      </article>
    );
  });

  return (
    <section id='projects'>
      <h2>Projects</h2>
      { allProjects }
    </section>
  );
};

export default Projects;