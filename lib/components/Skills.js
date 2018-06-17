import React from 'react';

const Skills = ({ skillsList }) => {
  const allSkills = skillsList.map(skill => {
    const { title, skills, imagePath, imageAlt } = skill;
    const skillLists = skills.map(eachSkill => (
      <span key={eachSkill}>{eachSkill} </span>
    ));
    return (
      <div className="skills-block" key={title}>
        <img className="skill-image" src={imagePath} alt={imageAlt} />
        <div className="inner-skills">
          <h4>{title}</h4>
          {skillLists}
        </div>
      </div>
    );
  });
  return (
    <article className="skills-section">
      <div className="skills-wrapper">
        <h2>Things I Know</h2>
        {allSkills}
      </div>
    </article>
  );
};

export default Skills;
