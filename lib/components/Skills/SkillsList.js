import React from 'react';

const SkillsList = ({ skillsList }) => (
  <React.Fragment>
    {skillsList.map(eachSkill => <span key={eachSkill}>{eachSkill} </span>)}
  </React.Fragment>
);

export default SkillsList;
