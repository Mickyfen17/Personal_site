import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetails = ({ title, description, image, techUsed }) => {
  const listedTech = techUsed.map((tech, i) =>
    <h4 key={i}>{tech}</h4>,
  );
  return (
    <section>
      <h1 className='project-detail-header'>{ title }</h1>
      <img className='project-detail-image'src={`../${image}`} alt={`Picture of my ${title} project`} />
      <p className='project-detail-desc'>{ description }</p>
      <div className='project-detail-tech'>
        <h3>Technologies Used</h3>
        { listedTech }
      </div>
      <Link to='/'>
        <button className='home-button'>X</button>
      </Link>
    </section>
  );
};

export default ProjectDetails;