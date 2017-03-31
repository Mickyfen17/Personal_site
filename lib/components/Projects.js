import React from 'react';
import ProjectList from '../Data/ProjectList'

import { Link } from 'react-router-dom';


const Projects = () => {
  const allProjects = ProjectList.map((project, i) => {
    const { title, image, gitHubRepo, siteURL, icons } = project;
    return (
      <article className='each-project' key={i}>
        <img className='project-image' src={ image } />
        <div className='article-layer'>
          <h3>{ title }</h3>
          <a href={ gitHubRepo } target='_blank'>
            <img className='project-icons' src={ icons.git } />
          </a>
          <Link to={`/project/${title}`}>
            <button className='project-button'>More Details</button>
          </Link>

          <a href={ siteURL } target='_blank'>
            <img className='project-icons' src={ icons.site } />
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