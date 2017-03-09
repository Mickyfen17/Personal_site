import React, { Component } from 'react';
import SkillsList from '../Data/SkillsList'

const Skills = () => {

  const allSkills = SkillsList.map((skill, i) => {
    const { title, skills } = skill;
    const skillLists = skills.map((eachSkill, i) =>
        <li key={i}>{ eachSkill }</li>,
    );
    return (
      <div className='skillsBlock' key={i}>
        <h4>{ title }</h4>
        <ul>{ skillLists }</ul>
      </div>
    );
  });
  return (
    <article>
      <h2>Thing I know</h2>
      { allSkills }
    </article>
  );
};

export default Skills;