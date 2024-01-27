import * as React from 'react';
import { Skill } from '../sharedTypes';
import { SkillsSection } from './SkillsSection';
import 'styles/about.scss';
import { WhoAmI } from './WhoAmI';

interface AboutProps {
  skills: Skill[];
}

export const About = ({ skills }: AboutProps) => (
  <section id='about'>
    <WhoAmI />
    <SkillsSection skills={skills} />
  </section>
);
