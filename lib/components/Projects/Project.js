import React from 'react';
import Thumbnail from '../Thumbnail';
import AnchorLink from '../AnchorLink';
import Button from '../Button';

const Project = ({ title, image, gitHubRepo, icons, siteURL, toggleModal }) => (
  <article className="each-project" key={title}>
    <Thumbnail
      classNames="project-image"
      imageId={image}
      alt={`${title} project`}
    />
    <div className="article-layer">
      <h3>{title}</h3>
      <AnchorLink href={gitHubRepo} type="Github Repo">
        <img
          className="project-icons"
          src={icons.git}
          alt="icon of github cat"
        />
      </AnchorLink>
      <Button className="project-button" onClick={() => toggleModal(title)}>
        More Details
      </Button>
      <AnchorLink href={siteURL} title="Website">
        <img className="project-icons" src={icons.site} alt="icon of laptop" />
      </AnchorLink>
    </div>
  </article>
);

export default Project;
