import React, { Component } from 'react';
import ProjectList from '../Data/ProjectList'


const Projects = () => {
  console.log(ProjectList);
  const allProjects = ProjectList.map((project, i) => {
    const { title, description, image, gitHubRepo, siteURL, techUsed } = project;
    return (
      <article className='each-project' key={i}>
        <h3>{title}</h3>
        <img className='project-image' src={image} />
        <p>{description}</p>
        <p>{gitHubRepo}</p>
        <p>{siteURL}</p>
      </article>
    );
  });

  return (
    <section id='projects'>
      <h2>Projects</h2>
      {allProjects}
    </section>
  );
};

export default Projects;