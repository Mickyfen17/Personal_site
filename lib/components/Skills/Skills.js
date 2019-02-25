import React from 'react';
import SkillBlocks from './SkillBlocks';

const Skills = ({ skills }) => (
  <article className="skills-section">
    <div className="skills-wrapper">
      <h2>Things I Know</h2>
      <SkillBlocks skillBlockList={skills} />
    </div>
  </article>
);

export default Skills;
