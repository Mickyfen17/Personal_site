import React from 'react';
import Thumbnail from '../Thumbnail';
import Button from '../Button';
import TechList from './TechList';
import 'styles/projectDetail.scss';

const ProjectDetails = ({
  title,
  description,
  image,
  techUsed,
  toggleModal,
}) => {
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
        <TechList techUsed={techUsed} />
      </div>
      <Button className="close-modal" onClick={toggleModal}>
        x
      </Button>
    </section>
  );
};

export default ProjectDetails;
