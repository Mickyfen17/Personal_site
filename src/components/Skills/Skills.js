import React, { Fragment } from 'react';

const Skills = ({ skills }) => (
  <article className="skills-section">
    <div className="skills-wrapper">
      <h2>Things I Know</h2>
      {skills.map(({ title, skills: skillList }) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div>
              {skillList.map(skill => (
                <span className="each-skill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </Fragment>
        );
      })}
    </div>
  </article>
);

export default Skills;
