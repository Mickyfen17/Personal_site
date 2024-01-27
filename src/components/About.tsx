import * as React from 'react';
import { WhoAmI } from './WhoAmI';
import { SkillsSection } from './SkillsSection';
import 'styles/about.scss';
import { Skill } from '../sharedTypes';

interface AboutProps {
  skills: Skill[];
}

export const About = ({ skills }: AboutProps) => (
  <section id='about'>
    <WhoAmI />
    <SkillsSection skills={skills} />
  </section>
);
