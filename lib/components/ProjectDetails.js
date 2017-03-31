import React from 'react';

const ProjectDetails = ({ title, description }) => {
  console.log(title, description);
  return (
    <section>
      <h1>{ title }</h1>
      <p>{ description }</p>
    </section>
  )
}

export default ProjectDetails;