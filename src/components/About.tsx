import * as React from 'react';
import { WhoAmI } from './WhoAmI';
import { SkillsSection } from './SkillsSection';
import { Skills } from '../reducers/useAppReducer';
import 'styles/about.scss';

interface AboutProps {
  skills: Skills;
}

export const About = ({ skills }: AboutProps): JSX.Element => (
  <section id='about'>
    <WhoAmI />
    <SkillsSection skills={skills} />
  </section>
);
