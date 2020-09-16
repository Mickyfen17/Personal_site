import React, { Fragment } from 'react';
import NeonContentWrapper from '../NeonContentWrapper';

const Skills = ({ skills }) => (
  <NeonContentWrapper title="Things I Know">
    <div className="skills-wrapper">
      {skills.map(({ title, skills: skillList }) => {
        return (
          <Fragment key={title}>
            <h3>{title}</h3>
            <div className="skill-block">
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
  </NeonContentWrapper>
);

export default Skills;
