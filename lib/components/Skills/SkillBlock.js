import React from 'react';
import SkillsList from './SkillsList';

const SkillBlock = ({ title, skills, imagePath, imageAlt }) => (
  <div className="skills-block" key={title}>
    <img className="skill-image" src={imagePath} alt={imageAlt} />
    <div className="inner-skills">
      <h4>{title}</h4>
      <SkillsList skillsList={skills} />
    </div>
  </div>
);

export default SkillBlock;
