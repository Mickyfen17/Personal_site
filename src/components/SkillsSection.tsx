import * as React from 'react';
import { Skill } from '../sharedTypes';
import { NeonContentWrapper } from './NeonContentWrapper';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <NeonContentWrapper color='cyan' title='Things I Know'>
    <div className='skills-wrapper'>
      {skills.map(({ title, skills: skillList }) => {
        return (
          <React.Fragment key={title}>
            <h3>{title}</h3>
            <div className='skill-block'>
              {skillList.map((skill) => (
                <span className='each-skill' key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  </NeonContentWrapper>
);
