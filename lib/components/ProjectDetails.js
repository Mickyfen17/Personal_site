import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetails = ({ title, description }) => {

  return (
    <section>
      <h1>{ title }</h1>
      <p>{ description }</p>
      <Link to='/'>
        <button className='go-home-button'>Back</button>
      </Link>
    </section>
  );
};

export default ProjectDetails;