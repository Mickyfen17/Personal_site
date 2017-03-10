import React, { Component } from 'react';
import SkillsList from '../Data/SkillsList'

const Skills = () => {

  const allSkills = SkillsList.map((skill, i) => {
    const { title, skills, imagePath } = skill;
    const skillLists = skills.map((eachSkill, i) =>
        <span key={i}>{ eachSkill } </span>,
    );
    return (
      <div className='skills-block' key={i}>
        <img className='skill-image' src={ imagePath } />
        <div className='inner-skills'>
          <h4>{ title }</h4>
          { skillLists }
        </div>
      </div>
    );
  });
  return (
    <article className='skills-section'>
      <div className='skills-wrapper'>
        <h2>Things I Know</h2>
        { allSkills }
      </div>
    </article>
  );
};

export default Skills;