import React from 'react';

import WhoAmI from '../WhoAmI';
import Skills from '../Skills';

const About = ({ skills }) => (
  <section id="about">
    <WhoAmI />
    <Skills skills={skills} />
  </section>
);

export default About;
