import React from 'react';
import Thumbnail from './Thumbnail';

const ProjectDetails = ({
  title,
  description,
  image,
  techUsed,
  toggleModal,
}) => {
  const listedTech = techUsed.map(tech => <h4 key={tech}>{tech}</h4>);
  return (
    <section className="project-details">
      <h2 className="project-detail-header">{title}</h2>
      <Thumbnail
        classNames="project-detail-image"
        imageId={image}
        alt={`${title} project`}
      />
      <p className="project-detail-desc">{description}</p>
      <div className="project-detail-tech">
        <h3>Technologies Used</h3>
        {listedTech}
      </div>
      <button className="close-modal" onClick={toggleModal}>
        x
      </button>
    </section>
  );
};

export default ProjectDetails;
