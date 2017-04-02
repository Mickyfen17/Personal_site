import React from 'react';

const ProjectDetails = ({ title, description, image, techUsed, toggleModal }) => {
  const listedTech = techUsed.map((tech, i) =>
    <h4 key={i}>{tech}</h4>,
  );
  return (
    <section className='project-details'>
      <h2 className='project-detail-header'>{ title }</h2>
      <img
        className='project-detail-image'src={image}
        alt={`Picture of my ${title} project`}
      />
      <p className='project-detail-desc'>{ description }</p>
      <div className='project-detail-tech'>
        <h3>Technologies Used</h3>
        { listedTech }
      </div>
      <button
        className='home-button'
        onClick={ () => toggleModal() }>
        X
      </button>
    </section>
  );
};

export default ProjectDetails;