import React from 'react';
import SkillBlock from './SkillBlock';

const SkillBlocks = ({ skillBlockList }) => (
  <React.Fragment>
    {skillBlockList.map(skill => {
      return <SkillBlock key={skill.title} {...skill} />;
    })}
  </React.Fragment>
);

export default SkillBlocks;
