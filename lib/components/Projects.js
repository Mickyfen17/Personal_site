import React, { Component } from 'react';
import ProjectList from '../Data/ProjectList'


const Projects = () => {
  const allProjects = ProjectList.map((project, i) => {
    const { title, description, image, gitHubRepo, siteURL, techUsed, icons } = project;
    return (
      <article className='each-project' key={i}>
        <h3>{ title }</h3>
        <figure>
          <img className='project-image' src={ image } />
          <figcaption>
            <p>{ description }</p>
            <a href={ gitHubRepo } target='_blank'>
              <img className='project-icons' src={ icons.git } />
            </a>
            <a href={ siteURL } target='_blank'>
              <img className='project-icons' src={ icons.site } />
            </a>
          </figcaption>
        </figure>
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