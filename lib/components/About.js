import React from 'react';
import { SkillsContext } from '../containers/app';

import WhoAmI from './WhoAmI';
import Skills from './Skills';

const About = () => {
  return (
    <section id="about">
      <WhoAmI />
      <SkillsContext.Consumer>
        {skills => <Skills skillsList={skills} />}
      </SkillsContext.Consumer>
    </section>
  );
};

export default About;
