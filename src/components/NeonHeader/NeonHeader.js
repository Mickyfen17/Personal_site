import React from 'react';
import { useNeonLightsContext } from '../../context/NeonLightsContext';
import 'styles/neonHeader';

const NeonHeader = ({ children: textString }) => {
  const [firstName, lastName] = textString.split(' ');
  const idx = Math.floor(Math.random() * lastName.length);
  const letterToFlicker = lastName[idx];
  const lightsOn = useNeonLightsContext();

  const flickeringLastName = (
    <React.Fragment>
      {lastName.slice(0, idx)}
      <span className='flicker'>{letterToFlicker}</span>
      {lastName.slice(idx + 1)}
    </React.Fragment>
  );

  return (
    <header id='neon-title' className={`${lightsOn ? 'lights-on' : ''}`}>
      <h1>
        {firstName} {flickeringLastName}
      </h1>
    </header>
  );
};

export default NeonHeader;
