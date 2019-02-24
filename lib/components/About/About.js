import React from 'react';
import { SkillsContext } from '../../App';

import WhoAmI from '../WhoAmI';
import Skills from '../Skills';

const About = () => {
  return (
    <section id="about">
      <WhoAmI />
      <SkillsContext.Consumer>
        {skills => <Skills skills={skills} />}
      </SkillsContext.Consumer>
    </section>
  );
};

export default About;
