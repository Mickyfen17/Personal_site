import React, { Component } from 'react';
import SkillsList from '../Data/SkillsList'

const Skills = () => {

  const allSkills = SkillsList.map((skill, i) => {
    const { title, skills, imagePath } = skill;
    const skillLists = skills.map((eachSkill, i) =>
        <li key={i}>{ eachSkill }</li>,
    );
    return (
      <div className='skills-block' key={i}>
        <h4>{ title }</h4>
        <img className= 'skill-image' src={ imagePath } />
        <ul>{ skillLists }</ul>
      </div>
    );
  });
  return (
    <article className='skills-section'>
      <h2>Things I Know</h2>
      { allSkills }
    </article>
  );
};

export default Skills;