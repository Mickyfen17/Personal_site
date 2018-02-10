import React from 'react';

import WhoAmI from './WhoAmI';
import Skills from './Skills';

const About = ({ skillsList }) => {
  return (
    <section id="about">
      <WhoAmI />
      <Skills skillsList={skillsList} />
    </section>
  );
};

export default About;
